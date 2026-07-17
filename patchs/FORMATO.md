# 📋 Guía de Formato — Patch Notes ChileOnline

Esta guía explica cómo escribir cada parche para que se vea correcto en la página.

---

## Frontmatter (obligatorio)

Todo archivo `.md` debe comenzar con este bloque entre `---`:

```yaml
---
version: "v2026.S31"
season: 2026
week: 31
title: "Parche v2026.S31"
date: 2026-07-24
subtitle: "Subtítulo que aparece debajo de la versión"
status: "LIVE"
---
```

### Campos

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `version` | string | Número de versión del parche | `"v2026.S31"` |
| `season` | number | Año/temporada | `2026` |
| `week` | number | Número de semana | `31` |
| `title` | string | Título del parche | `"Parche v2026.S31"` |
| `date` | date | Fecha de publicación (YYYY-MM-DD) | `2026-07-24` |
| `subtitle` | string | Subtítulo descriptivo | `"La semana del pan caro"` |
| `status` | enum | Estado del parche | `LIVE` \| `PENDIENTE` \| `DEPRECATED` |

---

## Nombre del archivo

Usar el formato: `YYYY-sNN.md`

```bash
patchs/
├── 2026-s30.md    # Semana 30
├── 2026-s31.md    # Semana 31
├── 2026-s32.md    # Semana 32
└── ...
```

---

## Estructura del contenido

### 1. Introducción (sin header)

Después del frontmatter, va un párrafo introductorio con el tono sarcástico:

```markdown
Esta semana el servidor recibió una actualización inesperada. Los desarrolladores
aseguran que "esta vez sí funciona". La comunidad responde con un "ya veremos".
```

### 2. Headers principales (`##`)

Usar `##` para cada sección. El emoji va al inicio del header:

```markdown
## 🌧️ Nombre de la Sección

Contenido de la sección aquí.
```

### 3. Sub-headers (`###`)

Para sub-secciones dentro de una sección principal:

```markdown
## 🌧️ Evento Mundial

Descripción general.

### ⚡ Energía

Detalles específicos.
```

### 4. Bullet points (`-`)

Para listar items, usar `-` al inicio de cada línea:

```markdown
- Primer punto
- Segundo punto
- Tercer punto
```

### 5. Negrita (`**texto**`)

Para enfatizar frases clave:

```markdown
Se activó un evento de dificultad **Legendaria**.
```

### 6. Citas (`>`)

Para citas o declaraciones sarcásticas:

```markdown
> "Es un día histórico" — Todos los senadores, ignorando que 24 votaron en contra.
```

---

## Categorías y sus emojis

Usar estos emojis para las secciones:

| Categoría | Emoji | Ejemplo de uso |
|-----------|-------|----------------|
| Evento Climático | 🌧️ | Lluvias, temporales, terremotos |
| Energía | ⚡ | Apagones, luz, electricidad |
| Física | 🏗️ | Accidentes, colapsos, infraestructura |
| Economía | ⛽ | Dólar, inflación, supermercado |
| Política | 🏛️ | Leyes, congreso, elecciones |
| IA de los NPC | 🚧 | Comportamiento ciudadano |
| Transporte | 🍍 | Buses, metro, taxis |
| Balance Económico | 💸 | Sueldos, arriendos, precios |
| Salud Mental | 🧠 | Estrés, ansiedad colectiva |
| Bug Fixes | 🛠️ | Problemas "arreglados" |
| Mensaje Desarrolladores | 📢 | Nota final |

---

## Ejemplo completo

```markdown
---
version: "v2026.S31"
season: 2026
week: 31
title: "Parche v2026.S31"
date: 2026-07-24
subtitle: "La Semana en que Todo Subió Menos los Sueldos"
status: "LIVE"
---

Esta semana el servidor recibió un parche de balance que nadie pidió. Los
desarrolladores insisten en que es "parte del diseño intended".

## 🌧️ Evento Climático: Lluvias en el Sur

Se activó un evento de dificultad **Épica** en la zona sur.

- Varias regiones reportan inundaciones menores.
- El sistema de alerta funcionó (primera vez).
- Se suspendieron clases preventivamente.

### ⚡ Energía

- 50,000 jugadores quedaron sin luz temporalmente.
- La reposición tomó 4 horas (récord).

## ⛽ Economía: El Pan Subió Otra Vez

El IPC reveló que el pan subió **3.2%** en un mes. Nadie está sorprendido.

- El dólar se mantuvo estable en $920.
- Los combustibles bajaron 1.5%.
- El café subió 2.8% (esto sí es un crimen).

## 🏛️ Política: Misiones Secundarias

Continúan llegando nuevas misiones al Congreso.

- Se aprobó una ley que nadie leyó.
- La oposición prometió ir al Tribunal Constitucional.
- El botón "Fast Forward" sigue deshabilitado.

## 🛠️ Bug Fixes

**Corregido:** La app del Banco Central dejó de fallar.

**Pendiente:** El sistema de FONASA sigue intermitente.

## 📢 Mensaje de los Desarrolladores

Gracias por seguir jugando Chile Online. Próximo parche: cuando el
servidor lo permita... o cuando deje de subir el pan.
```

---

## Tono y estilo

- **Sarcástico e irónico**: Tratar noticias reales como si fueran cambios de un videojuego.
- **Gaming language**: Usar términos como "nerf", "buff", "bug fix", "hotfix", "legendary", "spawn", "RNG", "DLC".
- **Breve**: Párrafos cortos, no textos largos.
- **Humor chileno**: Referencias a la vida cotidiana (pan, micro, FONASA, etc.).
- **Sin politizar**: Burlarse de todos por igual, sin inclinación política.

---

## Errores comunes

❌ **No hacer:**
```markdown
## Energía
Se quedaron sin luz.
- punto 1
- punto 2
```

✅ **Hacer:**
```markdown
## ⚡ Energía

- Se quedaron sin luz.
- La reposición tomó horas.
```

❌ **No hacer:**
```markdown
## 🌧️ Evento mundial
texto pegado al header
```

✅ **Hacer:**
```markdown
## 🌧️ Evento mundial

texto con espacio después del header
```
