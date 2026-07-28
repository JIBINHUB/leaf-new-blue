import { createRequire } from 'node:module';
import { defineConfig, loadEnv } from 'vite';

const require = createRequire(import.meta.url);
const submitEnquiry = require('./api/submit-enquiry.js');

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const serverEnvKeys = [
    'RESEND_API_KEY',
    'RESEND_FROM_EMAIL',
    'LEAF_INBOX_EMAIL',
    'LEAF_EMAIL_LOGO_URL',
    'LEAF_EMAIL_HERO_URL'
  ];

  serverEnvKeys.forEach((key) => {
    if (env[key]) process.env[key] = env[key];
  });

  return {
    plugins: [
      {
        name: 'leaf-resend-api',
        configureServer(server) {
          server.middlewares.use('/api/submit-enquiry', async (request, response, next) => {
            try {
              await submitEnquiry(request, response);
            } catch (error) {
              next(error);
            }
          });
        }
      }
    ]
  };
});
