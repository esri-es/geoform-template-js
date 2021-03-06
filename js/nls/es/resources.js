﻿define(
   ({
    map: {
      error: "No se puede crear el mapa"
    },
    onlineStatus: {
      offline: "Estás trabajando sin conexión. Los envíos de formularios se guardarán localmente hasta que se pueda establecer conexión con el servidor.",
      reconnecting: "Reconectando&hellip;",
      pending: "${total} cambios pendientes se enviarán cuando se restablezca una conexión de red."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "Mi organización",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Mi contenido",
          favoritesLabel: "Mis favoritos"
        },
        title: "Seleccionar mapa web",
        searchTitle: "Buscar",
        ok: "Aceptar",
        cancel: "Cancelar",
        placeholder: "Introducir término de búsqueda"
      },
      groupdlg: {
        items: {
          organizationLabel: "Mi organización",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Mi contenido",
          favoritesLabel: "Mis favoritos"
        },
        title: "Seleccionar grupo",
        searchTitle: "Buscar",
        ok: "Aceptar",
        cancel: "Cancelar",
        placeholder: "Introducir término de búsqueda"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Aquí tienes un enlace a un GeoForm"
      }
    },
    user: {
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Norte",
      utm_easting: "Este",
      utm_zone_number: "Número de zona",
      selectLayerTabText: "${formSection} Seleccionar formulario",
      geoFormGeneralTabText: "${formSection} Introducir información",
      locationInformationText: "${formSection} Seleccionar ubicación",
      submitInformationText: "${formSection} Completar formulario",
      submitInstructions: "Agrega esta información al mapa.",
      myLocationText: "Ubicación actual",
      locationDescriptionForMoreThanOneOption: "Especifica la ubicación de esta entrada haciendo clic o tocando el mapa, o utilizando una de las opciones siguientes.",
      locationDescriptionForOneOption: "Especifica la ubicación de esta entrada haciendo clic o tocando el mapa, o utilizando la opción siguiente.",
      locationDescriptionForNoOption: "Especifica la ubicación de esta entrada haciendo clic o tocando el mapa.",
      addressText: "Buscar",
      geographic: "Lat/Lon",
      locationTabText: "Ubicación",
      locationPopupTitle: "Ubicación",
      submitButtonText: "Enviar",
      submitButtonTextLoading: "Enviando&hellip;",
      formValidationMessageAlertText: "Los siguientes campos son obligatorios:",
      selectLocation: "Selecciona una ubicación para tu envío.",
      emptylatitudeAlertMessage: "Introduce una coordenada de ${openLink}latitud${closeLink}.",
      emptylongitudeAlertMessage: "Introduce una coordenada de ${openLink}longitud${closeLink}.",
      shareUserTitleMessage: "Gracias por tu aportación.",
      entrySubmitted: "Tu propuesta se ha enviado al mapa.",
      shareThisForm: "Comparte este formulario",
      shareUserTextMessage: "Pide a otros que contribuyan utilizando las opciones siguientes.",
      addAttachmentFailedMessage: "No se puede agregar el adjunto a la capa",
      addFeatureFailedMessage: "No se puede agregar la entidad a la capa",
      noLayerConfiguredMessage: "Se ha producido un error al cargar o buscar una capa de entidades editable. Para ver el formulario y empezar a recopilar envíos, añade una capa de entidades editable al mapa web.",
      placeholderLatitude: "Latitud (Y)",
      placeholderLongitude: "Longitud (X)",
      latitude: "Latitud",
      longitude: "Longitud",
      findMyLocation: "Localizarme",
      finding: "Buscando ubicación&hellip;",
      backToTop: "Volver al principio",
      addressSearchText: "Tu entrada aparecerá aquí. Puedes arrastrar el punto para corregir la ubicación.",
      shareModalFormText: "Enlace del formulario",
      close: "Cerrar",
      locationNotFound: "La ubicación no se puede encontrar.",
      setLocation: "Definir ubicación",
      find: "Buscar dirección o lugar",
      attachment: "Adjuntos",
      toggleDropdown: "Activar/desactivar menú desplegable",
      invalidString: "Introduce un valor válido.",
      invalidSmallNumber: "Introduce un valor ${openStrong}entero${closeStrong} válido entre -32768 y 32767.",
      invalidNumber: "Introduce un valor ${openStrong}entero${closeStrong} válido entre -2147483648 y 2147483647.",
      invalidFloat: "Introduce un valor de ${openStrong}punto flotante${closeStrong} válido.",
      invalidDouble: "Introduce un valor ${openStrong}doble${closeStrong} válido.",
      invalidLatLong: "Introduce coordenadas de latitud y longitud válidas.",
      invalidUTM: "Introduce coordenadas UTM válidas.",
      invalidUSNG: "Introduce coordenadas USNG válidas.",
      invalidMGRS: "Introduce coordenadas MGRS válidas.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "Seleccionar&hellip;",
      applyEditsFailedMessage: "Tu propuesta no se puede enviar. Vuelve a intentarlo.",
      requiredFields: "Hay algunos errores. Corrígelos a continuación.",
      requiredField: "(necesario)",
      error: "Error",
      textRangeHintMessage: "${openStrong}Sugerencia:${closeStrong} Valor mínimo ${minValue} y valor máximo ${maxValue}",
      dateRangeHintMessage: "${openStrong}Sugerencia:${closeStrong} Fecha mínima ${minValue} y fecha máxima ${maxValue}",
      remainingCharactersHintMessage: "${value} caracteres restantes",
      mapFullScreen: "Pantalla completa",
      mapRestore: "Restaurar",
      filterSelectEmptyText: "Seleccionar",
      invalidLayerMessage: "La capa del formulario no existe. Configura la aplicación y establece la capa.",
      selectedLayerText: "Todo",
      fileUploadStatus: "Estado de carga de archivos",
      uploadingBadge: "&nbsp;Cargando&hellip;",
      successBadge: "&nbsp;Cargado",
      retryBadge: "Reintentar",
      errorBadge: "Error al cargar&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "Archivo demasiado grande para adjuntarlo",
      exceededFileCountError: "Se excedió el n.º máximo de adjuntos permitidos",
      selectFileTitle: "Seleccionar un archivo",
      btnViewSubmissions: "Ver envíos",
      dateFormat: "DD/MM/YYYY h:mm a"
    },
    builder: {
      invalidUser: "Lo lamentamos, no tienes permiso para ver este elemento",
      invalidWebmapSelectionAlert: "El mapa web seleccionado no contiene una capa válida para utilizar. Agrega una capa de entidades editable a tu mapa web para continuar.",
      invalidWebmapSelectionAlert2: "Para obtener más información consulta ${openLink}¿Qué es un servicio de entidades?${closeLink}",
      selectFieldsText: "Seleccionar campos del formulario",
      selectThemeText: "Seleccionar tema del formulario",
      webmapText: "Mapa web",
      layerText: "Capa",
      detailsText: "Detalles",
      fieldsText: "Campos",
      styleText: "Estilo",
      optionText: "Opciones",
      previewText: "Vista previa",
      publishText: "Publicar",
      optionsApplicationText: "Opciones",
      titleText: "Builder",
      descriptionText: "GeoForm es una plantilla configurable para la edición de datos basados en formularios de un ${link1}servicio de entidades${closeLink}. Esta aplicación permite a los usuarios introducir datos por medio de un formulario en lugar de hacerlo con una ventana emergente del mapa, aprovechando así la eficacia del ${link2}mapa web${closeLink} y los servicios de entidades editables. Sigue estos pasos para personalizar e implementar tu GeoForm.",
      btnPreviousText: "Anterior",
      btnNextText: "Siguiente",
      webmapTabTitleText: "Selecciona un mapa web",
      viewWebmap: "Ver mapa web",
      webmapDetailsText: "El mapa web seleccionado es ${webMapTitleLink}${webMapTitle}${closeLink}. Para seleccionar un mapa web diferente, haz clic en el botón «Seleccionar mapa web»",
      btnSelectWebmapText: "Seleccionar mapa web",
      btnSelectWebmapTextLoading: "Cargando&hellip;",
      layerTabTitleText: "Selecciona una capa editable",
      selectLayerLabelText: "Capa",
      selectLayerDefaultOptionText: "Seleccionar capa",
      defaultBasemap: "Cambiar el mapa base",
      secondaryBasemap: "Mapa base predeterminado",
      detailsTabTitleText: "Detalles del formulario",
      detailTitleLabelText: "Título",
      detailLogoLabelText: "Imagen del logotipo",
      descriptionLabelText: "Instrucciones y detalles del formulario",
      fieldDescriptionLabelText: "Texto de ayuda (opcional)",
      fieldTabFieldHeaderText: "Campo",
      fieldTabLabelHeaderText: "Etiqueta",
      fieldTabDisplayTypeHeaderText: "Mostrar como",
      fieldTabOrderColumnText: "Orden",
      fieldTabVisibleColumnText: "Habilitado",
      displayFieldText: "Mostrar campo",
      selectMenuOption: "Seleccionar menú",
      selectRadioOption: "Botón de radio",
      selectTextOption: "Texto",
      selectDateOption: "Selector de fecha",
      selectRangeOption: "Control de giro",
      selectCheckboxOption: "Casilla de verificación",
      selectMailOption: "Correo electrónico",
      selectUrlOption: "URL",
      selectTextAreaOption: "Área de texto",
      previewApplicationText: "Vista previa de la aplicación",
      saveApplicationText: "Guardar aplicación",
      saveText: "Guardar",
      toggleNavigationText: "Alternar navegación",
      formPlaceholderText: "Mi formulario",
      shareBuilderInProgressTitleMessage: "Publicando GeoForm",
      shareBuilderProgressBarMessage: "Espera&hellip;",
      shareBuilderTitleMessage: "¡Listo! Se ha guardado el elemento",
      shareBuilderTextMessage: "Puedes empezar a recopilar información compartiéndolo con otros",
      shareModalFormText: "Enlace del formulario",
      shareBuilderSuccess: "Tu GeoForm se ha actualizado y publicado.",
      geoformTitleText: "Geo Form",
      layerTabText: "Esta es la capa a partir de la cual se creará el GeoForm. Esta capa debe ser un servicio de entidades habilitado para su edición y con permisos de uso compartido adecuados.",
      detailsTabText: "Utiliza los cuadros de Detalles del formulario que aparecen a continuación para personalizar el título, agregar un logotipo personalizado y proporcionar una breve descripción dirigida al público del GeoForm. En la descripción, puedes agregar vínculos a otros recursos e información de contacto, e incluso llevar a tu público a una aplicación que muestre en un mapa todos los datos capturados con GeoForm.",
      fieldsTabText: "Aquí puedes seleccionar los campos que estarán visibles para el público, editar las etiquetas que verán y agregar una breve descripción para facilitar la entrada de datos.",
      styleTabText: "Aplica estilo a tu GeoForm utilizando los temas de abajo, según tus preferencias.",
      publishTabText: "Cuando hayas terminado de personalizar tu GeoForm, guarda la aplicación y compártela con el público. Siempre puedes volver a este builder para seguir personalizándolo según los comentarios que hayas ido recibiendo.",
      headerSizeLabel: "Tamaño del encabezado",
      smallHeader: "Usar encabezado pequeño",
      bigHeader: "Usar encabezado grande",
      pushpinText: "Chincheta",
      doneButtonText: "Guardar y salir",
      fieldTabPlaceHolderHeaderText: "Sugerencia (opcional)",
      enableAttachmentLabelText: "${openStrong}Habilitar adjuntos${closeStrong}",
      enableAttachmentLabelHint: "Puedes habilitar/deshabilitar los adjuntos aquí",
      attachmentIsRequiredLabelText: "${openStrong}Se requiere adjunto${closeStrong}",
      attachmentIsRequiredLabelHint: "Si es necesario, se puede requerir a los usuarios la introducción de un adjunto.",
      attachmentLabelText: "Etiqueta del botón Adjuntos",
      attachmentLabelHint: "Este texto aparecerá al lado del botón Adjuntos. Puedes usar este espacio para describir lo que deseas que adjunten los usuarios (fotos, vídeos, documentos, etc.), el tipo de formato que solicitas (.jpeg, .png, .docx, .pdf, etc.) y cualquier instrucción adicional",
      attachmentDescription: "Descripción del adjunto",
      attachmentHint: "Si es necesario, puedes aportar instrucciones adicionales sobre los adjuntos aquí.",
      jumbotronDescription: "Usa un encabezado grande o pequeño para tu formulario. Un encabezado grande puede resultar útil para definir la finalidad de tu aplicación, pero ocupa más espacio en la pantalla",
      shareGeoformText: "Compartir GeoForm",
      shareDescription: "El panel de uso compartido ayuda a tu público a compartir el GeoForm con otros colaboradores una vez que han hecho un envío. Se puede deshabilitar en cualquier momento.",
      defaultMapExtent: "Extensión de mapa predeterminada",
      defaultMapExtentDescription: "El mapa volverá a la extensión predeterminada tras realizar el envío. Se puede deshabilitar en cualquier momento.",
      pushpinOptionsDescription: "Elige entre los distintos colores disponibles para la chincheta, debe ser distinta de la simbología del mapa para ayudar al usuario a colocar su envío en el mapa",
      selectLocationText: "Seleccionar ubicación por",
      myLocationText: "Mi ubicación",
      searchText: "Buscar",
      coordinatesText: "Coordenadas de latitud y longitud",
      usng: "Coordenadas USNG",
      mgrs: "Coordenadas MGRS",
      utm: "Coordenadas UTM",
      selectLocationSDescription: "Permite a los usuarios seleccionar una ubicación con estos métodos.",
      dragTooltipText: "Arrastra el campo hasta la posición en la que quieres que aparezca",
      showHideLayerText: "Mostrar capa",
      showHideLayerHelpText: "Puedes configurar el GeoForm para mostrar/ocultar la capa. Esta opción se aplica solo a la configuración de una única capa.",
      labelHelpMessage: "Etiqueta",
      placeHolderHintMessage: "Texto de sugerencia",
      placeHolderHelpMessage: "Texto de ayuda",
      selectTextOptionValue: "Selección de filtros",
      disableLogo: "Deshabilitar logotipo",
      disableLogoDescription: "Puedes configurar el GeoForm para mostrar/ocultar el logotipo en el encabezado del formulario",
      locateOnLoadText: "Ubicar al cargar",
      locateOnLoadDescription: "Puedes configurar el GeoForm para usar la ubicación actual al cargar la página",
      selectLayerFieldTabText: "Seleccionar capa",
      allLayerSelectOptionText: "Todo",
      disableViewer: "Deshabilitar visor",
      disableViewerDescription: "Puedes configurar el GeoForm para deshabilitar/habilitar el visor",
      displayFieldHintText: "El campo de visualización seleccionado se mostrará en el visor como campo del título"
    },
    viewer: {
      geocoderCancelText: "Cancelar",
      viewReportsTabText: "Envíos",
      viewLegendTabText: "Leyenda",
      viewAboutusTabText: "Acerca de",
      viewMapTabText: "Mapa",
      sortHeaderText: "Ordenar por:",
      btnSubmitReportText: "Enviar un informe",
      geocoderPlaceholderText: "Código postal, ciudad, etc.",
      noSearchResult: "No se ha encontrado ningún resultado",
      recordsTabTooltip: "Ver envíos",
      legendTabTooltip: "Leyenda",
      aboutUsTabTooltip: "Acerca de nosotros",
      mapTabTooltip: "Mapa",
      appLoadingFailedMessage: "El modo visor no está disponible",
      btnDescendingText: "Desc",
      btnAscendingText: "Asc",
      geometryUnavailableErrorMessage: "No se pudo encontrar la geometría de la entidad",
      infoPopupOffErrorMessage: "InfoPopup está apagado",
      btnLoadMoreText: "Cargar más",
      unavailableTitleText: "Sin título",
      unavailableConfigMessage: "No se pudo cargar la configuración"
    }
  })
);