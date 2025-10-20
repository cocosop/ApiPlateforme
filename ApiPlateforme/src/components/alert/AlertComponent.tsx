import { createContext, useState, useContext, ReactNode } from "react";
import { Snackbar, Alert } from "@mui/material";

type NotificationType = "success" | "error" | "info" | "warning";

interface NotificationContextType {
    showNotification: (message: string, severity?: NotificationType) => void;
}

const NotificationContext = createContext<NotificationContextType>({
    showNotification: () => { },
});

const AlertComponent = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState<NotificationType>("info");

    const showNotification = (msg: string, sev: NotificationType = "info") => {
        setMessage(msg);
        setSeverity(sev);
        setOpen(true);
    };

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") return;
        setOpen(false);
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert severity={severity} variant="filled" sx={{ width: "100%" }}>
                    {message}
                </Alert>
            </Snackbar>
        </NotificationContext.Provider>
    );
};

export default AlertComponent;