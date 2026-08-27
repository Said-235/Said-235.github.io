# Portafolio — Said Hernandez (Kitzune)

Sitio estático en React + Vite + Tailwind. Se publica en GitHub Pages: `https://said-235.github.io/`.

## Desarrollo local

```bash
cp .env.example .env
# opcional: pega tu clave de Web3Forms en VITE_WEB3FORMS_ACCESS_KEY
npm install
npm run dev
```

## Formulario de contacto (Web3Forms)

El sitio es estático: el formulario no puede enviar correo por sí solo.

1. Entra a [web3forms.com](https://web3forms.com) y crea una clave con `jshc_88@hotmail.com`.
2. En local, ponla en `.env` como `VITE_WEB3FORMS_ACCESS_KEY`.
3. En GitHub: **Settings → Secrets and variables → Actions → New repository secret** con el mismo nombre. El workflow la inyecta en el build.

Hasta que exista la clave, el formulario avisa y deja el `mailto` como alternativa.

## Publicar en GitHub Pages

1. Haz push a `main`.
2. En el repo: **Settings → Pages → Source → GitHub Actions**.
3. El workflow `.github/workflows/deploy.yml` construye `dist` y lo publica.
4. Espera el check verde. La URL de GitHub será `https://said-235.github.io/`. El sitio público será un **subdominio** (abajo).

## Subdominio (el dominio principal está en Amplify)

El dominio raíz ya está en **AWS Amplify**: en Namecheap se ve como ALIAS `@` y CNAME `www` hacia `*.cloudfront.net`. Ese sitio no se mueve.

Un subdominio **no se compra aparte**. Es un registro DNS nuevo. Hasta que lo crees, `portfolio.tudominio.com` no existe. Elige un host (`portfolio`, `said`, `kitzune`…) y síguelo igual en Namecheap, GitHub y `public/CNAME`.

### 1. Crear el subdominio en Namecheap

En la misma pantalla de **Advanced DNS** (Host Records):

1. Pulsa **+ ADD NEW RECORD** (el botón rojo bajo la tabla).
2. En **Type** elige **CNAME Record** (no ALIAS, no A Record).
3. Rellena así:

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| Type | CNAME Record | CNAME Record |
| Host | solo el subdominio, **sin** el dominio | `portfolio` |
| Value | destino de GitHub Pages, con punto final | `said-235.github.io.` |
| TTL | Automatic | Automatic |

4. Confirma la fila (palomita verde) y, si Namecheap lo pide, **SAVE ALL CHANGES**.
5. En la tabla debe aparecer una fila **más**, sin haber editado las que ya tienes.

**No toques** estas filas (son Amplify, el certificado SSL y el correo):

- ALIAS `@` → `d378bhxof298q0.cloudfront.net.`
- CNAME `www` → el mismo CloudFront
- CNAME que empieza por `_` (validación del certificado de AWS)
- TXT `@` de SPF / email forwarding

Si en Host pones `www` o `@`, vas a romper el sitio de Amplify.

Tras guardar, el subdominio queda creado. La DNS puede tardar unos minutos (a veces hasta 30–60). Comprueba:

```bash
dig portfolio.tudominio.com +short
```

Debe salir `said-235.github.io` y luego IPs de GitHub. El dominio principal no debe cambiar:

```bash
dig tudominio.com +short
dig www.tudominio.com +short
```

Esos dos deben seguir resolviendo a CloudFront.

### 2. Enlazar el subdominio en GitHub Pages

Cuando el `dig` del subdominio ya apunte a GitHub:

1. En el repo: **Settings → Pages → Custom domain**.
2. Escribe el FQDN, no solo el host: `portfolio.tudominio.com`.
3. Guarda. GitHub verifica el CNAME y emite HTTPS (puede tardar).
4. Cuando aparezca, activa **Enforce HTTPS**.

### 3. Fijar el subdominio en este repo

Crea `public/CNAME` con **una sola línea** (sin `https://`), para que Vite lo copie a `dist` en cada build:

```
portfolio.tudominio.com
```

Sustituye `portfolio` y `tudominio.com` por los valores reales. Si me los pasas, dejo el archivo creado.
