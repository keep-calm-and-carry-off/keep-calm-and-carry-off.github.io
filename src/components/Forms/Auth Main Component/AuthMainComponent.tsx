import { Box, Tab, Tabs, Typography } from '@mui/material';
import React, { FC } from 'react';
import { AuthForm } from '../AuthForm/AuthForm';
import { RegistrationForm } from '../Registration Form/RegistrationForm';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const TabPanel: FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      aria-labelledby={`auth-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
const a11yProps = (index: number) => {
  return {
    id: `auth-tab-${index}`,
    'aria-controls': `auth-tabpanel-${index}`,
  };
};

export const AuthMainComponent: FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Авторизация" {...a11yProps(0)} />
          <Tab label="Регистрация" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AuthForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RegistrationForm />
      </TabPanel>
    </>
  );
};
