# 🧭 Guía de buenas prácticas Git para el equipo DevEcommerce

Esta guía establece el flujo de trabajo y las convenciones que seguimos como equipo para mantener un repositorio limpio, colaborativo y escalable.

---

## 🌿 Estructura de ramas

Usamos el modelo Git Flow simplificado:

- `main`: código estable y listo para producción.
- `develop`: integración de nuevas funcionalidades antes de pasar a producción.
- `feature/<nombre>`: desarrollo de funcionalidades específicas.
- `bugfix/<nombre>`: corrección de errores no críticos.
- `hotfix/<nombre>`: corrección urgente en producción.
- `release/<versión>`: preparación de una nueva versión.

---

## 🧪 Flujo de trabajo

1. **Crear rama de funcionalidad desde `develop`**  
   ```bash
   git checkout develop
   git pull
   git checkout -b feature/nombre-funcionalidad
   ````

2. **Commits claros y concisos**  
- Usa el presente: Agrega validación al formulario
- Evita mensajes genéricos como update o fix

3. **Push y Pull Request hacia develop**  
    ```bash
    git push origin feature/nombre-funcionalidad  
    ````

- Crea un Pull Request en GitHub
- Agrega descripción clara del cambio
- Solicita revisión de al menos un compañero

4. **Merge a `main` sólo desde `develop`**
-  - Cuando develop esté listo para producción, se hace PR hacia main


---


## 🛡️ Reglas de colaboración
- No hacer commits directamente en main o develop
- Usar ramas por funcionalidad
- Revisar código antes de hacer merge
- Resolver conflictos localmente antes de subir
- Documentar cambios importantes en el PR


---


## 📚 Convenciones de nombres
- Ramas: feature/carrito, bugfix/login-error, hotfix/precio-duplicado
- Commits: Corrige error de validación en checkout, Agrega componente de producto
