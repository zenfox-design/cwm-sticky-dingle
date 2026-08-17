# Cwm Sticky Dingle

Public website and guest portal for Cwm Sticky Dingle, Govilon, near Abergavenny.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static website is exported to `out/` and can be deployed to Cloudflare.

## Cloudflare build settings

- Build command: `npm run build`
- Output directory: `out`
- Node.js version: `22`

The production domains are `cwmstickydingle.co.uk` and `www.cwmstickydingle.co.uk`.
