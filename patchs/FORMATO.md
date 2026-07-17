# Guia de Formato - Patch Notes ChileOnline

Esta guia explica como escribir cada parche para que se vea correcto en la pagina.

---

## Frontmatter (obligatorio)

Todo archivo `.md` debe comenzar con este bloque entre `---`:

```yaml
---
version: "v6.7.18"
season: 2026
week: 31
title: "Parche v6.7.18"
date: 2026-07-24
subtitle: "Subtitulo que aparece debajo de la version"
status: "LIVE"
---
```

### Campos

| Campo | Tipo | Descripcion | Ejemplo |
|-------|------|-------------|---------|
| `version` | string | Numero de version del parche | `"v6.7.18"` |
| `season` | number | Ano/temporada | `2026` |
| `week` | number | Numero de semana | `31` |
| `title` | string | Titulo del parche | `"Parche v6.7.18"` |
| `date` | date | Fecha de publicacion (YYYY-MM-DD) | `2026-07-24` |
| `subtitle` | string | Subtitulo descriptivo | `"La semana del pan caro"` |
| `status` | enum | Estado del parche | `LIVE` \| `PENDIENTE` \| `DEPRECATED` |

---

## Nombre del archivo

Usar el formato: `YYYY-sNN.md`

```
patchs/
├── 2026-s30.md    # Semana 30
├── 2026-s31.md    # Semana 31
├── 2026-s32.md    # Semana 32
└── ...
```

---

## Estructura del contenido

### Reglas generales

- Sin emojis en ningun标题 ni contenido
- Sin bullet points (`-`)
- Sin negrita (`**`)
- Sin citas (`>`)
- Solo texto plano con saltos de linea

### 1. Introduccion (sin header)

Despues del frontmatter, va el titulo del parche y un parrafo introductorio:

```markdown
Chile Online v6.7.18

Nombre del Parche "Subtitulo"

Hola jugadores.

Texto introductorio aqui...
```

### 2. Headers principales (`##`)

Usar `##` para cada seccion, sin emojis:

```markdown
## Eventos

Contenido de la seccion aqui.
```

### 3. Sub-headers (`###`)

Para sub-secciones dentro de una seccion principal:

```markdown
## Eventos

### Evento Mundial: "Nombre"

Descripcion general.

Detalles especificos.
```

### 4. Parrafos

Para listar items, usar parrafos separados por lineas en blanco:

```markdown
Primer punto.

Segundo punto.

Tercer punto.
```

### 5. Ejemplo completo

```markdown
---
version: "v6.7.18"
season: 2026
week: 31
title: "Parche v6.7.18"
date: 2026-07-24
subtitle: "La Semana en que Todo Subio Menos los Sueldos"
status: "LIVE"
---

Chile Online v6.7.18

Nombre del Parche "Subtitulo"

Hola jugadores.

Esta semana el servidor recibio un parche de balance que nadie pidio. Los
desarrolladores insisten en que es "parte del diseño intended".

## Eventos

### Evento Climatico: Lluvias en el Sur

Se activo un evento de dificultad Epica en la zona sur.

Varias regiones reportan inundaciones menores.

El sistema de alerta funciono (primera vez).

Se suspendieron clases preventivamente.

### Electricidad

50,000 jugadores quedaron sin luz temporalmente.

La reposicion tomo 4 horas (record).

## Economia: El Pan Subio Otra Vez

El IPC revelo que el pan subio 3.2% en un mes. Nadie esta sorprendido.

El dolar se mantuvo estable en $920.

Los combustibles bajaron 1.5%.

El cafe subio 2.8% (esto si es un crimen).

## Politica: Misiones Secundarias

Continuan llegando nuevas misiones al Congreso.

Se aprobo una ley que nadie leyo.

La oposicion prometio ir al Tribunal Constitucional.

El boton "Fast Forward" sigue deshabilitado.

## Bug Fixes

Corregido: La app del Banco Central dejo de fallar.

Pendiente: El sistema de FONASA sigue intermitente.

## Mensaje de los Desarrolladores

Gracias por seguir jugando Chile Online. Proximo parche: cuando el
servidor lo permita... o cuando deje de subir el pan.
```

---

## Tono y estilo

- **Sarcastico e ironico**: Tratar noticias reales como si fueran cambios de un videojuego.
- **Gaming language**: Usar terminos como "nerf", "buff", "bug fix", "hotfix", "legendary", "spawn", "RNG", "DLC".
- **Breve**: Parrafos cortos, no textos largos.
- **Humor chileno**: Referencias a la vida cotidiana (pan, micro, FONASA, etc.).
- **Sin politizar**: Burlarse de todos por igual, sin inclinacion politica.

---

## Errores comunes

NO hacer:
```markdown
## Energia
Se quedaron sin luz.
punto 1
punto 2
```

SI hacer:
```markdown
## Energia

Se quedaron sin luz.

La reposicion tomo horas.
```

NO hacer:
```markdown
## Evento mundial
texto pegado al header
```

SI hacer:
```markdown
## Evento mundial

texto con espacio despues del header
```
