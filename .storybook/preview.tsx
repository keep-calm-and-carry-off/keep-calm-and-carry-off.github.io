import type { Preview } from "@storybook/react";
import '../src/assets/css/global.scss'
import React from "react";
import { ThemeProvider } from '../src/helpers/providers/ThemeProvider';
import { I18nextProvider } from "react-i18next";
import i18n from '../src/helpers/localization/i18next_settings'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="app-container" style={{display:'flex', flexDirection:'column', minHeight:'600px'}}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider>
            <div style={{ display: 'flex', flexDirection: 'column', padding:'8px' }}>
              <Story />
            </div>

          </ThemeProvider>
        </I18nextProvider>
      </div>
    )
  ]
};

export default preview;
