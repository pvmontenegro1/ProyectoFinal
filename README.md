**Proyecto HearthCare que te permitira crear tus citas médicas desde tu hogar o a su vez gestionar una pequeña clinica para confirmar las citas o cancelar las citas**
*Proyecto realizado con las siguientes tecnologías*

- Next.js
- Appwrite
- Typescript
- TailwindCSS
- ShadCN
- Twilio

**Para ejecutar el proyecto primero se necesita crear la base de datos en la nube preferiblemente en Appwrite en la cual se encuetra MariaDB una base tanto relacional como no relacional crear las colecciones y por consiguiente copiar en el archivo .env.local las claves**

Instalar todas las dependencias npm:

```bash
npm install
```

**Una vez creadas las colecciones de datos en la base de datos MariaDB crear el archivo que se muestra a continuación para poder correr el aplicativo con la base de datos**

`.env.local`  archivo que contendra las sigientes variables con sus respectivas claves:

```env
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111
```


**Para correr el Proyecto una vez realizdos los cambios**

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) in your browser to view the project.

Pstd: Espero sea de su agrado el aplicativo que ha sido inspitado en una serie de tutoriales de youtibe para aprender estas tecnologías en la nube y a propósito he dejado las claves de mis colecciones de la base de dato con fines didácticos.

