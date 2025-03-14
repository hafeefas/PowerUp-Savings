# React + TypeScript + Vite

## Here's how the website looks!
![image](https://github.com/user-attachments/assets/9844e0a8-c733-4478-9c3d-5e4f912eef08)
![image](https://github.com/user-attachments/assets/d109044a-5c3d-4e27-b3ca-fd38a56248b0)
![image](https://github.com/user-attachments/assets/aec9bf6f-f8ab-4322-9d25-d5272aeb45aa)

## We also added a chatbot advisor to help you make better financial decisions when shopping!
![image](https://github.com/user-attachments/assets/acbc0383-d090-4b77-878c-16994a3ae6b9)

## The shopping page: shop at whatever partnership stores you love in order to gain points and bonuses on everyday purchases
![image](https://github.com/user-attachments/assets/d23eb15c-ded1-4d76-a0d4-ff080b955b9f)
![image](https://github.com/user-attachments/assets/d60def96-bb21-4f90-a9dd-55de630f053b)

## There's even a quiz for shopping smarter to make better financial decisions
![image](https://github.com/user-attachments/assets/e9b8d1f0-367a-4596-a412-e5f75b504e62)

## Be aware of what you're buying! We gather data from the backend to assess what you've been buying, so you're aware of what you're doing :) It'll lead to better financial decisions in the future
![image](https://github.com/user-attachments/assets/7a4aeba3-fc55-4873-9895-5f93f892e730)
![image](https://github.com/user-attachments/assets/0e1032c3-c17f-4dda-b686-51a2cb07d5fb)
![image](https://github.com/user-attachments/assets/6bb5c336-4d26-4b80-a23e-93d187c6099a)

## The rewards page lets you know about rewards and bonuses you can gain by using our platform:
![image](https://github.com/user-attachments/assets/b69fc674-1c61-482d-84d3-1c1cf1d838b8)

------


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
