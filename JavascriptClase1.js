   
    alert("Este es el contenido teorico de Javascript clase 1 😎");
    alert("¿Qué ítem querés estudiar 🤓?");
    let continuar = true;

    while (continuar) {
        let mensaje = Number(prompt("1.Conceptos basicos de Javascript\n2.Integración con HTML y CSS\n3.Revisión de Git y GitHub\n4.Cual es la actividad practica de la semana?"));

        switch (mensaje) {
            case 1:
                alert("1. Variables y Tipos de Datos.\nJavaScript utiliza variables para almacenar datos que pueden variar durante la ejecución del programa. Las variables se declaran con las palabras clave let o const. Estas variables pueden ser declaradas (se les asigna solamente un nombre) o declarada e inicializada(se le declara un nombre y un valor especifico)");
                alert("Los tipos de datos principales en JavaScript son:\nString: para textos.\nNumber: para números.\nBoolean: para valores verdadero (true) o falso (false)\nNull: representa un valor nulo.\nUndefined: indica que una variable no tiene asignado un valor.")
                alert("2. Operaciones Básicas:\nJavaScript permite realizar operaciones aritméticas básicas como suma (+), resta (-), multiplicación (*) y división (/).")
                alert("3. Estructuras de Control:\nLas estructuras de control permiten dirigir el flujo de ejecución mediante decisiones o repeticiones.")
                alert("a. Condicionales\nif: Ejecuta un bloque de código si una condición es verdadera.\nelse: Se ejecuta si la condición del if no se cumple.\nb. Bucles\nfor: Ejecuta un bloque de código un número determinado de veces.\nwhile: Ejecuta un bloque de código mientras la condición sea verdadera.")
                alert("Conclusión:\nComprender estas bases de JavaScript es esencial para manipular datos y controlar el flujo de operaciones en cualquier aplicación web. A medida que avancemos, exploraremos más características avanzadas del lenguaje.")

                break;
            case 2:
                alert("Vinculación con HTML\nCuando desarrollamos sitios web, es común separar el contenido HTML del código JavaScript para mantener organizado el código y facilitar su mantenimiento. Esto se logra mediante la etiqueta <script> en HTML, que permite incluir archivos JavaScript externos o incorporar código directamente dentro de los documentos HTML.");
                alert("Uso Básico de la Etiqueta <script>\nPara vincular un archivo JavaScript externo a un documento HTML, se utiliza la etiqueta <script> con el atributo src, que contiene la ruta al archivo JavaScript. Esta etiqueta se puede colocar dentro del <head> o antes del cierre del <body>, dependiendo de cuándo se desea que se cargue el script.");
                alert("Atributos async y defer\nPara controlar cómo y cuándo se cargan los scripts, podemos usar los atributos async y defer, que influyen en el comportamiento de carga y ejecución de los scripts sin bloquear el renderizado del resto de la página.");
                alert("async\nEl atributo async permite que el script se cargue de manera asincrónica con respecto al resto de la página. Esto significa que el navegador no necesita esperar a que el script se cargue y ejecute para continuar procesando el resto del contenido HTML. El script se ejecutará tan pronto como esté disponible, lo que puede mejorar la velocidad de carga de la página.")
                alert("defer\nEl atributo defer, por otro lado, también permite la carga asincrónica del script, pero retrasa la ejecución del mismo hasta que todo el documento HTML ha sido completamente cargado y analizado. Esto es útil para scripts que necesitan interactuar con elementos del DOM o cuyo orden de ejecución es importante.");
                alert("Consideraciones\nPosicionamiento:\nTradicionalmente, los scripts se colocan al final del cuerpo del documento (<body>) para no bloquear la carga de la página. Con async y defer, tenemos mayor flexibilidad para colocar las etiquetas <script> en la sección <head>, ya que su comportamiento asincrónico evita el bloqueo del renderizado.");
                alert("Compatibilidad:\nTodos los navegadores modernos soportan async y defer. Sin embargo, es importante considerar las implicaciones de cada uno en el comportamiento de carga y ejecución del script para asegurar que la funcionalidad del sitio no se vea afectada negativamente.");
                alert("Conclusión\nUtilizar adecuadamente async y defer puede mejorar significativamente la experiencia del usuario al reducir los tiempos de carga percibidos y asegurar que el contenido crítico se muestre lo más rápido posible. Al integrar JavaScript en nuestros documentos HTML, estos atributos son herramientas valiosas para optimizar el rendimiento y la interactividad de las páginas web.");
                break;
            case 3:
                alert("Uso de Git\n¿Qué es Git?\nGit es un sistema de control de versiones distribuido y de código abierto que permite a los desarrolladores gestionar de manera eficiente y segura las versiones de sus proyectos de software. Es fundamental para coordinar el trabajo entre múltiples colaboradores, rastrear cambios en el código y revertir a versiones anteriores si es necesario.");
                alert("Instalación de Git\nPara comenzar a usar Git, necesitas instalarlo en tu sistema. Aquí te mostramos cómo hacerlo en diferentes sistemas operativos:\nWindows: Descarga el instalador de Git desde git-scm.com, y sigue las instrucciones de instalación.\nMac: Puedes instalar Git usando Homebrew con el comando brew install git.\nLinux: Utiliza el gestor de paquetes de tu distribución, por ejemplo, en Ubuntu sería sudo apt-get install git.");
                alert("Configuración Inicial de Git\nUna vez instalado, configura tu identidad en Git. Esto es crucial para que cada commit que realices en tus proyectos esté adecuadamente firmado con tu nombre y correo electrónico.\ngit config --global user.name 'Tu Nombre'\ngit config --global user.email 'tu.email@example.com'");
                alert("Creando tu Primer Repositorio:\nPara empezar un nuevo proyecto con Git, primero debes crear un repositorio local. Aquí te mostramos cómo:");
                alert("mkdir MiProyecto\ncd MiProyecto\ngit init\nEste conjunto de comandos crea una nueva carpeta llamada MiProyecto, navega dentro de ella, y ejecuta git init para inicializar un nuevo repositorio de Git.")
                alert("Utilidad de Git en el Desarrollo\nGit es esencial por varias razones:\nControl de Cambios: Permite ver quién hizo qué cambios y cuándo, lo que es crucial en proyectos colaborativos.\nRamas (Branches): Facilita la experimentación y el desarrollo paralelo sin afectar la base de código principal, mejorando la gestión de nuevas características y pruebas.\nRevertir Cambios: Puedes volver fácilmente a una versión anterior si algo sale mal en la versión actual de tu proyecto.");
                alert("Conclusión\nAprender y utilizar Git es fundamental para cualquier desarrollador que trabaje en proyectos modernos de desarrollo de software. Facilita la colaboración y la gestión de código en equipos grandes y pequeños, asegurando que los cambios estén bien documentados y sean fáciles de modificar.")
                break;
                
            case 4:
                alert("Actividad Practica\nVariables y tipos de datos\nConsigna\nCrea variables con los siguientes tipos de datos (Numbre, string y boolean)\nMuestra los valores de las variables en consola\nTips\nCódigo fuente en archivo JavaScript, con formato .js, vinculando a este con el archivo HTML mediante el tag .\nUtiliza la consola para ayudarte a encontrar los errores o fallas que provocan que el código no funcione.");
                break;
           
            default:
                alert("Opción no válida 😅. probá un número del 1 al 4.");
                break;
        }

        continuar = confirm("¿Queres estudiar otro ítem? 👨‍🏫");
    }

    alert("No te desanimes😁! Fuerza 💪");
