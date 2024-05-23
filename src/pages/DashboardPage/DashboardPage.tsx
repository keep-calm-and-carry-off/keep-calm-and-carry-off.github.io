import { Box, Tab, Tabs, Typography } from '@mui/material';
import React, { FC } from 'react';
import { CategoryControl } from 'src/components/Admin Tabs/Category Control';
import { ProductsControl } from 'src/components/Admin Tabs/Product Control';
import { PageContainer } from 'src/components/Page Container';
import { ProductListEdit } from 'src/components/Product List Edit';

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
      id={`dashboard-tabpanel-${index}`}
      aria-labelledby={`dashboard-tab-${index}`}
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
export const DashboardPage: FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const a11yProps = (index: number) => {
    return {
      id: `dashboard-tab-${index}`,
      'aria-controls': `dashboard-tabpanel-${index}`,
    };
  };
  return (
    <PageContainer>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Категории" {...a11yProps(0)} />
          <Tab label="Игры" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CategoryControl/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductsControl/>
      </TabPanel>
    </PageContainer>
  );
};
