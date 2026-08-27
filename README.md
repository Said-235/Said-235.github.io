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
2. En **Settings → Pages**, en **Build and deployment**, el recuadro que ahora dice **Deploy from a branch** es **Source**. Ábrelo y elige **GitHub Actions** (no hace falta un menú aparte con ese nombre).
3. No cambies Branch `main` / `/(root)`: al pasar a Actions esas opciones de rama desaparecen. El workflow `.github/workflows/deploy.yml` construye `dist` y lo publica.
4. Arriba a la izquierda, **Actions** (entre Tags y Webhooks) muestra el workflow. Espera el check verde.
5. La URL de GitHub será `https://said-235.github.io/`. El sitio público será un **subdominio** (abajo).

Si dejas **Deploy from a branch**, GitHub sirve el código fuente (`package.json`, `src/`) y el portafolio no se ve bien. Tiene que ser **GitHub Actions**.

## Subdominio (el dominio principal está en Amplify)

El dominio raíz ya está en **AWS Amplify**: en Namecheap se ve como ALIAS `@` y CNAME `www` hacia `*.cloudfront.net`. Ese sitio no se mueve.

Un subdominio **no se compra aparte**. Es un registro DNS nuevo. El de este sitio es `github.invenflow.xyz` (Host `github` en Namecheap).

### 1. Crear el subdominio en Namecheap

En la misma pantalla de **Advanced DNS** (Host Records):

1. Pulsa **+ ADD NEW RECORD** (el botón rojo bajo la tabla).
2. En **Type** elige **CNAME Record** (no ALIAS, no A Record).
3. Rellena así:

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| Type | CNAME Record | CNAME Record |
| Host | solo el subdominio, **sin** el dominio | `github` |
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
dig github.invenflow.xyz +short
```

Debe salir `said-235.github.io` y luego IPs de GitHub. El dominio principal no debe cambiar:

```bash
dig invenflow.xyz +short
dig www.invenflow.xyz +short
```

Esos dos deben seguir resolviendo a CloudFront.

### 2. Enlazar el subdominio en GitHub Pages

Cuando el `dig` del subdominio ya apunte a GitHub:

1. En el repo: **Settings → Pages → Custom domain**.
2. Escribe el FQDN, no solo el host: `github.invenflow.xyz` (con **n**: *invenflow*, no *ivenflow*).
3. Guarda. GitHub verifica el CNAME y emite HTTPS (puede tardar).
4. Cuando aparezca, activa **Enforce HTTPS**.

### 3. Fijar el subdominio en este repo

Crea `public/CNAME` con **una sola línea** (sin `https://`), para que Vite lo copie a `dist` en cada build:

```
github.invenflow.xyz
```

Ese archivo ya está en `public/CNAME`. Tras un push, Vite lo copia a `dist` en cada build.
