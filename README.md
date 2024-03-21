# MapApp

No usar directamente en AngularCLI, refiriendome especificamente a usar "ng serve" ó "ng build" (a menos que estén creadas las variables de entorno) ya que las variables de entorno se crean basadose en el .env

## Pasos:

1. Clonar el archivo src/environments/environment.template y renombrarlo a .env

2. Llenar las variables de entorno acorde al template (o agrega nuevas si las necesitas sin olvidar agregarlas también al archivo scripts/set-envs.js)

3. Crear Angular Envs (opcional)

```
npm run envs
```

4. Para development ejecutar:

```
npm run start
```

5. Para producción ejecutar:

```
npm run build
```
