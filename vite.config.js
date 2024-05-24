import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [
    EnvironmentPlugin(['REACT_APP_EMAILJS_SERVICE_ID', 'REACT_APP_EMAILJS_TEMPLATE_ID', 'REACT_APP_EMAILJS_PUBLIC_KEY']),
  ],
});
