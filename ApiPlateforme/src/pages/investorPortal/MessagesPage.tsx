import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import {
  Avatar,
  Badge,
  Button,
  Empty,
  Input,
  Layout,
  List,
  Skeleton,
  Spin,
  Tooltip,
  Typography,
  message as antMessage,
} from "antd";
import {
  ArrowLeftOutlined,
  MessageOutlined,
  PaperClipOutlined,
  SearchOutlined,
  SendOutlined,
} from "@ant-design/icons";
import messageService, {
  BackendChat,
} from "../../services/messageService";
import userService, { UserResponse } from "../../services/userService";

const { Sider, Content } = Layout;
const { Text, Title } = Typography;
const { TextArea } = Input;

/* ─────────────────────────── constants ───────────────────────────── */
const PRIMARY = "#0F0B60";
const PRIMARY_LIGHT = "#ECEAF8";
const BORDER = "#ECEAF5";
const SIDEBAR_W = 320;

/* ─────────────────────────── helpers ─────────────────────────────── */
function formatTime(ts?: string): string {
  if (!ts) return "";
  const d = new Date(ts);
  if (isNaN(d.getTime())) return ts;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / 86_400_000);
  if (diffDays === 0)
    return d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  if (diffDays === 1) return "Hier";
  if (diffDays < 7)
    return d.toLocaleDateString("fr-FR", { weekday: "short" });
  return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" });
}

function formatFullTime(ts?: string): string {
  if (!ts) return "";
  const d = new Date(ts);
  if (isNaN(d.getTime())) return ts;
  return d.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function initials(firstname?: string, lastname?: string, email?: string): string {
  const f = (firstname?.[0] ?? "").toUpperCase();
  const l = (lastname?.[0] ?? "").toUpperCase();
  if (f || l) return `${f}${l}`;
  return (email?.[0] ?? "?").toUpperCase();
}

function avatarColor(name: string): string {
  const palette = [
    "#5C6BC0", "#42A5F5", "#26A69A", "#66BB6A",
    "#FFA726", "#EF5350", "#AB47BC", "#EC407A",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return palette[Math.abs(hash) % palette.length];
}

/* ─────────────────────────── types ───────────────────────────────── */
interface MappedMessage {
  id: string;
  content: string;
  isMe: boolean;
  senderName: string;
  senderInitials: string;
  senderColor: string;
  senderAvatar?: string;
  timestamp: string;
  fullTimestamp: string;
  isEdited: boolean;
  fileUrl?: string;
}

interface MappedChat {
  id: string;
  projectName: string;
  projectRef: string;
  lastMessageText: string;
  lastMessageTime: string;
  hasUnread: boolean;
  unreadCount: number;
  messages: MappedMessage[];
}

/* ─────────────────────────── component ───────────────────────────── */
const MessagesPage: React.FC = () => {
  const [chats, setChats] = useState<MappedChat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserResponse | null>(null);
  const [mobileShowChat, setMobileShowChat] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  /* ── scroll to bottom ── */
  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, []);

  /* ── map BackendChat → MappedChat ── */
  const mapChats = useCallback(
    (raw: BackendChat[], user: UserResponse | null): MappedChat[] => {
      return raw.map((c) => {
        const msgs: MappedMessage[] = (c.messages ?? []).map((m) => {
          const isMe =
            user?.email
              ? (m.sender?.email ?? "").toLowerCase() === user.email.toLowerCase()
              : false;
          const fname = m.sender?.firstname ?? "";
          const lname = m.sender?.lastname ?? "";
          const sName = isMe
            ? `${user?.firstname ?? ""} ${user?.lastname ?? ""}`.trim() || "Vous"
            : `${fname} ${lname}`.trim() || m.sender?.email || "API Cameroun";
          return {
            id: m.id ?? String(Math.random()),
            content: m.content ?? "",
            isMe,
            senderName: sName,
            senderInitials: initials(
              isMe ? user?.firstname : fname,
              isMe ? user?.lastname : lname,
              m.sender?.email
            ),
            senderColor: avatarColor(sName),
            senderAvatar: m.sender?.url_image,
            timestamp: formatTime(m.timestamp),
            fullTimestamp: formatFullTime(m.timestamp),
            isEdited: m.isEdited,
            fileUrl: m.fileUrl,
          };
        });

        const last = msgs[msgs.length - 1];
        const unreadMsgs = (c.messages ?? []).filter(
          (m) => !m.isRead && (m.sender?.email ?? "") !== (user?.email ?? "")
        );

        return {
          id: c.id,
          projectName: c.project?.titre ?? "Projet d'investissement",
          projectRef: `API-${String(c.project?.id ?? "001").padStart(4, "0")}`,
          lastMessageText: last?.content ?? "Aucun message",
          lastMessageTime: last?.timestamp ?? "",
          hasUnread: unreadMsgs.length > 0,
          unreadCount: unreadMsgs.length,
          messages: msgs,
        };
      });
    },
    []
  );

  /* ── fetch ── */
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      let user = currentUser;
      if (!user) {
        try {
          const r = await userService.me();
          user = r.data;
          setCurrentUser(user);
        } catch (_) {
          /* ignore */
        }
      }
      const res = await messageService.fetchAllChat();
      const raw: BackendChat[] = Array.isArray(res.data) ? res.data : [];
      const mapped = mapChats(raw, user);
      setChats(mapped);
      if (!activeChatId && mapped.length > 0) {
        setActiveChatId(mapped[0].id);
      }
    } catch (err) {
      console.error(err);
      antMessage.error("Impossible de charger les conversations.");
    } finally {
      setLoading(false);
    }
  }, [currentUser, activeChatId, mapChats]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── select chat ── */
  const handleSelectChat = (id: string) => {
    setActiveChatId(id);
    setMobileShowChat(true);
    if (id) {
      messageService.readMessage(id).catch(() => {});
      setChats((prev) =>
        prev.map((c) =>
          c.id === id ? { ...c, hasUnread: false, unreadCount: 0 } : c
        )
      );
      scrollToBottom();
    }
  };

  /* ── send ── */
  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text || !activeChatId) return;
    setInputValue("");
    setSending(true);

    // Optimistic UI
    const tempId = `temp-${Date.now()}`;
    const optimistic: MappedMessage = {
      id: tempId,
      content: text,
      isMe: true,
      senderName: `${currentUser?.firstname ?? ""} ${currentUser?.lastname ?? ""}`.trim() || "Vous",
      senderInitials: initials(currentUser?.firstname, currentUser?.lastname, currentUser?.email),
      senderColor: PRIMARY,
      timestamp: formatTime(new Date().toISOString()),
      fullTimestamp: formatFullTime(new Date().toISOString()),
      isEdited: false,
    };
    setChats((prev) =>
      prev.map((c) =>
        c.id === activeChatId
          ? {
              ...c,
              messages: [...c.messages, optimistic],
              lastMessageText: text,
              lastMessageTime: optimistic.timestamp,
            }
          : c
      )
    );
    scrollToBottom();

    try {
      await messageService.sendMessage({ chatId: activeChatId, content: text });
      // refresh to get server-side id & timestamp
      const res = await messageService.fetchAllChat();
      const raw: BackendChat[] = Array.isArray(res.data) ? res.data : [];
      const refreshed = mapChats(raw, currentUser);
      setChats(refreshed);
      scrollToBottom();
    } catch (err) {
      console.error(err);
      antMessage.error("Échec de l'envoi du message.");
      // rollback
      setChats((prev) =>
        prev.map((c) =>
          c.id === activeChatId
            ? { ...c, messages: c.messages.filter((m) => m.id !== tempId) }
            : c
        )
      );
    } finally {
      setSending(false);
      textAreaRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  /* ── derived ── */
  const activeChat = chats.find((c) => c.id === activeChatId) ?? null;

  const filteredChats = chats.filter((c) =>
    c.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.projectRef.toLowerCase().includes(searchQuery.toLowerCase())
  );

  /* ══════════════════════════════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════════════════════════════ */
  return (
    <div
      style={{
        fontFamily: "'Poppins', 'Inter', sans-serif",
        padding: "24px 24px 0",
        height: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        boxSizing: "border-box",
      }}
    >
      {/* ── Page title ── */}
      <div style={{ marginBottom: 20 }}>
        <Title level={4} style={{ margin: 0, color: PRIMARY, fontWeight: 700 }}>
          <MessageOutlined style={{ marginRight: 10 }} />
          Messagerie
        </Title>
        <Text type="secondary" style={{ fontSize: 13 }}>
          Vos échanges avec l'équipe API Cameroun
        </Text>
      </div>

      {/* ── Main chat layout ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          border: `1px solid ${BORDER}`,
          borderRadius: 16,
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 2px 12px rgba(15,11,96,0.07)",
          minHeight: 0,
        }}
      >
        {/* ════════════════════════════════════
            LEFT SIDEBAR — conversation list
        ════════════════════════════════════ */}
        <div
          style={{
            width: SIDEBAR_W,
            minWidth: SIDEBAR_W,
            borderRight: `1px solid ${BORDER}`,
            display: "flex",
            flexDirection: "column",
            background: "#FAFAFA",
            // hide on mobile when chat is open
            ...(mobileShowChat
              ? { display: "none" as const }
              : {}),
          }}
          className="messages-sidebar"
        >
          {/* search */}
          <div
            style={{
              padding: "16px 16px 12px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            <Input
              prefix={<SearchOutlined style={{ color: "#bbb" }} />}
              placeholder="Rechercher une conversation…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              allowClear
              style={{
                borderRadius: 10,
                fontSize: 13,
                background: "#fff",
              }}
            />
          </div>

          {/* list */}
          <div style={{ flex: 1, overflowY: "auto" }}>
            {loading ? (
              <div style={{ padding: 16 }}>
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} active avatar paragraph={{ rows: 1 }} style={{ marginBottom: 16 }} />
                ))}
              </div>
            ) : filteredChats.length === 0 ? (
              <div style={{ padding: 32, textAlign: "center" }}>
                <Empty
                  description={
                    <span style={{ fontSize: 13, color: "#aaa" }}>
                      {searchQuery ? "Aucun résultat" : "Aucune conversation"}
                    </span>
                  }
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
              </div>
            ) : (
              <List
                dataSource={filteredChats}
                renderItem={(chat) => {
                  const isActive = chat.id === activeChatId;
                  return (
                    <List.Item
                      key={chat.id}
                      onClick={() => handleSelectChat(chat.id)}
                      style={{
                        padding: "14px 16px",
                        cursor: "pointer",
                        background: isActive ? PRIMARY_LIGHT : "transparent",
                        borderLeft: isActive ? `3px solid ${PRIMARY}` : "3px solid transparent",
                        transition: "background 0.15s",
                        borderBottom: `1px solid ${BORDER}`,
                        alignItems: "flex-start",
                      }}
                      className="chat-list-item"
                    >
                      <div style={{ display: "flex", gap: 12, width: "100%" }}>
                        {/* avatar */}
                        <Badge
                          count={chat.unreadCount}
                          offset={[-2, 2]}
                          style={{ backgroundColor: PRIMARY }}
                        >
                          <Avatar
                            size={44}
                            style={{
                              background: isActive ? PRIMARY : "#7B72C9",
                              fontWeight: 700,
                              fontSize: 16,
                              flexShrink: 0,
                            }}
                          >
                            {chat.projectName.slice(0, 2).toUpperCase()}
                          </Avatar>
                        </Badge>

                        {/* text */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Text
                              strong={chat.hasUnread}
                              ellipsis
                              style={{
                                fontSize: 13,
                                color: isActive ? PRIMARY : "#14112B",
                                maxWidth: 150,
                              }}
                            >
                              {chat.projectName}
                            </Text>
                            <Text
                              style={{ fontSize: 11, color: "#aaa", flexShrink: 0, marginLeft: 6 }}
                            >
                              {chat.lastMessageTime}
                            </Text>
                          </div>
                          <Text
                            style={{
                              fontSize: 11,
                              color: "#6B7280",
                              display: "block",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            {chat.projectRef}
                          </Text>
                          <Text
                            ellipsis
                            style={{
                              fontSize: 12,
                              color: chat.hasUnread ? "#374151" : "#9CA3AF",
                              fontWeight: chat.hasUnread ? 600 : 400,
                              display: "block",
                            }}
                          >
                            {chat.lastMessageText}
                          </Text>
                        </div>
                      </div>
                    </List.Item>
                  );
                }}
              />
            )}
          </div>
        </div>

        {/* ════════════════════════════════════
            RIGHT PANEL — active chat
        ════════════════════════════════════ */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            background: "#fff",
          }}
        >
          {activeChat ? (
            <>
              {/* ── Chat header ── */}
              <div
                style={{
                  padding: "14px 20px",
                  borderBottom: `1px solid ${BORDER}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  flexShrink: 0,
                  background: "#fff",
                }}
              >
                {/* Back button (mobile) */}
                <Button
                  type="text"
                  icon={<ArrowLeftOutlined />}
                  onClick={() => setMobileShowChat(false)}
                  className="mobile-back-btn"
                  style={{ display: "none" }}
                />

                <Avatar
                  size={40}
                  style={{ background: PRIMARY, fontWeight: 700, fontSize: 15, flexShrink: 0 }}
                >
                  {activeChat.projectName.slice(0, 2).toUpperCase()}
                </Avatar>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <Text
                    strong
                    ellipsis
                    style={{ fontSize: 15, color: "#14112B", display: "block" }}
                  >
                    {activeChat.projectName}
                  </Text>
                  <Text style={{ fontSize: 12, color: "#9CA3AF" }}>
                    {activeChat.projectRef} · Équipe API Cameroun
                  </Text>
                </div>

                {/* Info pill */}
                <div
                  style={{
                    background: "#FFFBEB",
                    border: "1px solid #FDE68A",
                    borderRadius: 20,
                    padding: "4px 14px",
                    fontSize: 11,
                    color: "#92400E",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    flexShrink: 0,
                  }}
                  className="chat-info-pill"
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#F59E0B",
                      display: "inline-block",
                    }}
                  />
                  Canal officiel · API Cameroun
                </div>
              </div>

              {/* ── Messages thread ── */}
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  background: "#F8F9FC",
                }}
              >
                {activeChat.messages.length === 0 ? (
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Empty
                      description={
                        <span style={{ fontSize: 13, color: "#aaa" }}>
                          Aucun message. Commencez la conversation.
                        </span>
                      }
                    />
                  </div>
                ) : (
                  activeChat.messages.map((msg) => (
                    <MessageBubble key={msg.id} msg={msg} />
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* ── Input bar ── */}
              <div
                style={{
                  borderTop: `1px solid ${BORDER}`,
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 10,
                  background: "#fff",
                  flexShrink: 0,
                }}
              >
                <Tooltip title="Joindre un fichier (bientôt disponible)">
                  <Button
                    type="text"
                    icon={<PaperClipOutlined style={{ fontSize: 18, color: "#9CA3AF" }} />}
                    style={{ padding: 6, flexShrink: 0 }}
                    disabled
                  />
                </Tooltip>

                <TextArea
                  ref={textAreaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Répondre… (Entrée pour envoyer, Maj+Entrée pour saut de ligne)"
                  autoSize={{ minRows: 1, maxRows: 4 }}
                  disabled={sending}
                  style={{
                    flex: 1,
                    borderRadius: 12,
                    fontSize: 13,
                    resize: "none",
                    background: "#F3F4F6",
                    border: "1px solid #E5E7EB",
                    padding: "10px 14px",
                    lineHeight: 1.5,
                  }}
                />

                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  onClick={handleSend}
                  loading={sending}
                  disabled={!inputValue.trim()}
                  style={{
                    height: 42,
                    borderRadius: 12,
                    background: PRIMARY,
                    border: "none",
                    paddingLeft: 20,
                    paddingRight: 20,
                    fontWeight: 600,
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  Envoyer
                </Button>
              </div>
            </>
          ) : (
            /* ── Empty state ── */
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 48,
                background: "#F8F9FC",
              }}
            >
              {loading ? (
                <Spin size="large" />
              ) : (
                <>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: PRIMARY_LIGHT,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <MessageOutlined style={{ fontSize: 32, color: PRIMARY }} />
                  </div>
                  <Title level={5} style={{ color: "#374151", marginBottom: 8 }}>
                    Sélectionnez une conversation
                  </Title>
                  <Text style={{ color: "#9CA3AF", fontSize: 13, textAlign: "center", maxWidth: 320 }}>
                    Choisissez une conversation dans la liste à gauche pour afficher les messages échangés avec l'équipe API Cameroun.
                  </Text>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Responsive CSS ── */}
      <style>{`
        /* mobile: hide sidebar when chat open, show back button */
        @media (max-width: 768px) {
          .messages-sidebar {
            display: flex !important;
            width: 100% !important;
            min-width: 100% !important;
          }
          .mobile-back-btn {
            display: inline-flex !important;
          }
          .chat-info-pill {
            display: none !important;
          }
        }

        /* hover on list items */
        .chat-list-item:hover {
          background: #F0EFFE !important;
        }

        /* custom scrollbar */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #D1D5DB; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #9CA3AF; }
      `}</style>
    </div>
  );
};

/* ─────────────────────────── MessageBubble ───────────────────────── */
interface MessageBubbleProps {
  msg: MappedMessage;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ msg }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: msg.isMe ? "row-reverse" : "row",
        alignItems: "flex-end",
        gap: 10,
      }}
    >
      {/* Avatar */}
      <Tooltip title={msg.senderName}>
        <Avatar
          size={34}
          src={msg.senderAvatar || undefined}
          style={{
            background: msg.senderColor,
            fontWeight: 700,
            fontSize: 13,
            flexShrink: 0,
          }}
        >
          {!msg.senderAvatar && msg.senderInitials}
        </Avatar>
      </Tooltip>

      {/* Bubble */}
      <div
        style={{
          maxWidth: "72%",
          display: "flex",
          flexDirection: "column",
          alignItems: msg.isMe ? "flex-end" : "flex-start",
        }}
      >
        {/* sender name */}
        <Text
          style={{
            fontSize: 11,
            color: "#9CA3AF",
            marginBottom: 4,
            paddingLeft: msg.isMe ? 0 : 4,
            paddingRight: msg.isMe ? 4 : 0,
          }}
        >
          {msg.senderName}
        </Text>

        {/* bubble */}
        <Tooltip title={msg.fullTimestamp} placement={msg.isMe ? "left" : "right"}>
          <div
            style={{
              background: msg.isMe ? PRIMARY : "#fff",
              color: msg.isMe ? "#fff" : "#1F2937",
              borderRadius: msg.isMe ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              padding: "10px 16px",
              fontSize: 13,
              lineHeight: 1.6,
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              border: msg.isMe ? "none" : `1px solid ${BORDER}`,
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            {msg.content}

            {/* file attachment */}
            {msg.fileUrl && (
              <a
                href={msg.fileUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 8,
                  color: msg.isMe ? "#C7D2FE" : PRIMARY,
                  fontSize: 12,
                  textDecoration: "underline",
                }}
              >
                <PaperClipOutlined />
                Pièce jointe
              </a>
            )}
          </div>
        </Tooltip>

        {/* meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            marginTop: 3,
            paddingLeft: msg.isMe ? 0 : 4,
            paddingRight: msg.isMe ? 4 : 0,
          }}
        >
          <Text style={{ fontSize: 10, color: "#D1D5DB" }}>{msg.timestamp}</Text>
          {msg.isEdited && (
            <Text style={{ fontSize: 10, color: "#D1D5DB" }}> · modifié</Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
