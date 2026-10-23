import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Card, Row, Col, Progress, Statistic, Divider, Tag, List, Space } from 'antd';
import { 
  TeamOutlined, 
  LineChartOutlined, 
  EnvironmentOutlined, 
  BookOutlined, 
  FileTextOutlined, 
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const MainOeuvre: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6 shadow-lg">
            <TeamOutlined className="text-4xl text-white" />
          </div>
          <Title level={1} className="!mb-4 !text-gray-900 text-4xl sm:text-5xl font-extrabold">
            Main d'Œuvre au Cameroun
          </Title>
          <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les atouts, salaires, contrats et protections sociales d'une main-d'œuvre qualifiée et compétitive.
          </Paragraph>
        </motion.div>

        <Row gutter={[32, 32]}>
          {/* Qualification Section */}
          <Col xs={24} lg={12}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Card 
                hoverable 
                className="h-full rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-none"
                title={<Space><BookOutlined className="text-2xl text-green-600" /><Title level={3} className="!mb-0 !text-gray-800">Qualification</Title></Space>}
              >
                <Row gutter={[16, 16]} className="mb-8">
                  <Col span={12}>
                    <Card size="small" className="bg-green-50 text-center border-none rounded-xl">
                      <Statistic title="Alphabétisation (+15 ans)" value={71.2} suffix="%" valueStyle={{ color: '#16a34a', fontWeight: 'bold' }} />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card size="small" className="bg-green-50 text-center border-none rounded-xl">
                      <Statistic title="Primaire (Taux Net)" value={78.8} suffix="%" valueStyle={{ color: '#16a34a', fontWeight: 'bold' }} />
                    </Card>
                  </Col>
                </Row>
                
                <Title level={5} className="!text-gray-700 !mb-4">Répartition par niveau d'éducation</Title>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1"><Text type="secondary">Niveau primaire</Text><Text strong>35.7%</Text></div>
                    <Progress percent={35.7} strokeColor="#16a34a" showInfo={false} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1"><Text type="secondary">Non scolarisés</Text><Text strong>33.7%</Text></div>
                    <Progress percent={33.7} strokeColor="#facc15" showInfo={false} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1"><Text type="secondary">Niveau secondaire</Text><Text strong>26.0%</Text></div>
                    <Progress percent={26.0} strokeColor="#3b82f6" showInfo={false} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1"><Text type="secondary">Niveau supérieur</Text><Text strong>4.6%</Text></div>
                    <Progress percent={4.6} strokeColor="#9333ea" showInfo={false} />
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>

          {/* Salaires Section */}
          <Col xs={24} lg={12}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Card 
                hoverable 
                className="h-full rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-none"
                title={<Space><LineChartOutlined className="text-2xl text-blue-600" /><Title level={3} className="!mb-0 !text-gray-800">Salaires & Conditions</Title></Space>}
              >
                <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl text-white mb-6 shadow-inner">
                  <div className="text-sm font-medium mb-1 opacity-90">Salaire Minimum (SMIG)</div>
                  <div className="text-4xl font-extrabold mb-1">36 270 <span className="text-xl font-normal">FCFA</span></div>
                  <div className="text-blue-200">~ 55.3 € / mois (depuis 2014)</div>
                </div>

                <List
                  itemLayout="horizontal"
                  dataSource={[
                    { title: 'Cadres', salary: '267k - 457k FCFA', color: 'green' },
                    { title: 'Employés', salary: '129k - 325k FCFA', color: 'gold' },
                    { title: 'Ouvriers', salary: '40k - 134k FCFA', color: 'volcano' },
                  ]}
                  renderItem={item => (
                    <List.Item className="!py-3">
                      <List.Item.Meta
                        title={<Text strong className="text-lg">{item.title}</Text>}
                      />
                      <Tag color={item.color} className="!text-sm !py-1 !px-3 rounded-full font-bold">{item.salary}</Tag>
                    </List.Item>
                  )}
                />

                <Divider className="!my-4" />
                <Title level={5} className="!text-gray-700">Conditions de travail</Title>
                <Row gutter={[16, 16]}>
                  <Col span={12}><Text><CheckCircleOutlined className="text-blue-500 mr-2" />48h / semaine</Text></Col>
                  <Col span={12}><Text><CheckCircleOutlined className="text-blue-500 mr-2" />Repos: 24h/sem</Text></Col>
                  <Col span={12}><Text><CheckCircleOutlined className="text-blue-500 mr-2" />30 jours congés/an</Text></Col>
                  <Col span={12}><Text><CheckCircleOutlined className="text-blue-500 mr-2" />Âge légal: 16 ans</Text></Col>
                </Row>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Divider className="!my-12 opacity-0" />

        <Row gutter={[32, 32]}>
          {/* Cotisations Sociales */}
          <Col xs={24}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <Card 
                hoverable 
                className="rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-none"
                title={<Space><SafetyCertificateOutlined className="text-2xl text-purple-600" /><Title level={3} className="!mb-0 !text-gray-800">Cotisations Sociales</Title></Space>}
              >
                <Row gutter={[32, 32]} className="text-center">
                  <Col xs={24} md={8}>
                    <div className="p-6 bg-purple-50 rounded-2xl h-full border border-purple-100">
                      <Statistic title={<Text className="text-purple-800 font-semibold text-lg">Prestations Familiales</Text>} value={7} suffix="%" valueStyle={{ color: '#9333ea', fontSize: '2.5rem', fontWeight: '900' }} />
                      <Text type="secondary" className="block mt-2">À la charge exclusive de l'employeur</Text>
                    </div>
                  </Col>
                  <Col xs={24} md={8}>
                    <div className="p-6 bg-yellow-50 rounded-2xl h-full border border-yellow-100">
                      <Statistic title={<Text className="text-yellow-800 font-semibold text-lg">Risques Professionnels</Text>} value={1.75} suffix="%" valueStyle={{ color: '#ca8a04', fontSize: '2.5rem', fontWeight: '900' }} />
                      <Text type="secondary" className="block mt-2">Groupe A (risques faibles)</Text>
                    </div>
                  </Col>
                  <Col xs={24} md={8}>
                    <div className="p-6 bg-blue-50 rounded-2xl h-full border border-blue-100">
                      <Statistic title={<Text className="text-blue-800 font-semibold text-lg">Pension Vieillesse</Text>} value={8.4} suffix="%" valueStyle={{ color: '#2563eb', fontSize: '2.5rem', fontWeight: '900' }} />
                      <Text type="secondary" className="block mt-2">4.2% employeur + 4.2% employé</Text>
                    </div>
                  </Col>
                </Row>
                <div className="mt-8 text-center">
                  <Tag color="purple" className="!text-sm !py-2 !px-4 rounded-full">
                    <InfoCircleOutlined className="mr-2" />
                    Plafond des cotisations : 750 000 FCFA par mois (prestations familiales et pensions)
                  </Tag>
                </div>
              </Card>
            </motion.div>
          </Col>

          {/* Contrats et Expatriés */}
          <Col xs={24} lg={12}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <Card 
                hoverable 
                className="h-full rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-none"
                title={<Space><FileTextOutlined className="text-2xl text-yellow-600" /><Title level={3} className="!mb-0 !text-gray-800">Types de Contrats</Title></Space>}
              >
                <div className="mb-6 p-5 rounded-xl border-l-4 border-yellow-500 bg-yellow-50">
                  <Title level={5} className="!text-yellow-800 !mb-1">Contrat à Durée Déterminée (CDD)</Title>
                  <Text className="text-yellow-700">Maximum 12 mois, renouvelable une seule fois.</Text>
                </div>
                
                <div className="mb-6 p-5 rounded-xl border-l-4 border-green-500 bg-green-50">
                  <Title level={5} className="!text-green-800 !mb-1">Contrat à Durée Indéterminée (CDI)</Title>
                  <Text className="text-green-700">Temps plein ou partiel, encadré par le Code du Travail.</Text>
                </div>

                <Title level={5} className="!text-gray-700 !mt-6">Périodes d'essai applicables</Title>
                <List
                  size="small"
                  dataSource={[
                    'Employés/ouvriers payés à l\'heure : 15 jours',
                    'Employés/ouvriers payés au mois : 1 mois',
                    'Cadres et assimilés : 3 mois'
                  ]}
                  renderItem={item => <List.Item><Text><CheckCircleOutlined className="text-green-500 mr-2"/>{item}</Text></List.Item>}
                />
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} lg={12}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
              <Card 
                hoverable 
                className="h-full rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-none"
                title={<Space><EnvironmentOutlined className="text-2xl text-purple-600" /><Title level={3} className="!mb-0 !text-gray-800">Travailleurs Expatriés</Title></Space>}
              >
                <List
                  className="mb-6"
                  itemLayout="horizontal"
                  dataSource={[
                    { title: 'Aucun quota fixé', desc: 'Liberté d\'embauche selon les besoins de l\'entreprise.' },
                    { title: 'Compétences spécifiques', desc: 'Priorité accordée si la compétence est indisponible localement.' },
                    { title: 'Sécurité sociale', desc: 'Assujettissement obligatoire au système local.' },
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<CheckCircleOutlined className="text-purple-500 text-xl mt-1" />}
                        title={<Text strong>{item.title}</Text>}
                        description={item.desc}
                      />
                    </List.Item>
                  )}
                />

                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                  <Title level={5} className="!text-blue-800 !mb-2">Assurance volontaire (depuis 2014)</Title>
                  <Paragraph className="text-blue-700 !mb-2">
                    Disponible pour les travailleurs indépendants et étudiants (dès 14 ans).
                  </Paragraph>
                  <Tag color="blue" className="!text-sm !py-1 !px-3 rounded-full font-bold">
                    <DollarOutlined className="mr-1"/> Cotisation : 8.4% du revenu
                  </Tag>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default MainOeuvre;