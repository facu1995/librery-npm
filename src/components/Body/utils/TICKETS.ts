export interface APIresponse {
  issueResponseDto: Array<{}>;
  page: {};
}

export const TICKETS: APIresponse = {
  issueResponseDto: [
    {
      id: 13290,
      key: 'SAC-83',
      issueType: 'Solicitud',
      socialReason: 'Prueba CAR',
      emailReporter: 'QAEquipoCAR@EquipoCAR.com',
      created: '2023-04-26T06:00:11.515-0900',
      updated: '2023-04-26T08:40:55.903-0900',
      status: {
        id: 10153,
        name: 'ABIERTO',
        beClosed: true,
        supportCenterName: 'respuesta',
      },
      summary: 'prueba zonahoraria',
      description: {
        type: 'doc',
        version: 1,
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'asd ',
              },
            ],
          },
        ],
      },
    },
    {
      id: 13289,
      key: 'SAC-82',
      issueType: 'Consulta',
      created: '2023-04-26T05:31:29.455-0900',
      updated: '2023-04-26T05:33:46.152-0900',
      status: {
        id: 10153,
        name: 'ABIERTO',
        beClosed: true,
        supportCenterName: 'respuesta',
      },
      summary: 'veamos las horas',
    },
    {
      id: 13287,
      key: 'SAC-81',
      issueType: 'Consulta',
      created: '2023-04-26T05:20:49.600-0900',
      updated: '2023-04-26T05:26:16.319-0900',
      status: {
        id: 10153,
        name: 'ABIERTO',
        beClosed: true,
        supportCenterName: 'Abierto',
      },
      summary: 'prueba horario',
      description: {
        type: 'doc',
        version: 1,
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'adasd',
              },
            ],
          },
        ],
      },
    },
    {
      id: 13273,
      key: 'SAC-80',
      issueType: 'Solicitud',
      socialReason: 'Giannoni',
      emailReporter: 'admin01@giannoni.com.ar',
      created: '2023-04-25T04:42:50.447-0900',
      updated: '2023-04-25T04:42:50.665-0900',
      status: {
        id: 10153,
        name: 'ABIERTO',
        beClosed: true,
        supportCenterName: 'Abierto',
      },
      summary: 'Ticket nuevo',
      description: {
        type: 'doc',
        version: 1,
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Prueba horaria',
              },
            ],
          },
        ],
      },
    },
    {
      id: 13270,
      key: 'SAC-79',
      issueType: 'Solicitud',
      socialReason: 'Prueba CAR',
      emailReporter: 'QAEquipoCAR@EquipoCAR.com',
      created: '2023-04-25T04:13:21.183-0900',
      updated: '2023-04-26T05:59:26.530-0900',
      status: {
        id: 10085,
        name: 'Finalizado',
        beClosed: false,
        supportCenterName: 'Cerrado',
      },
      summary: 'Solicitud para atencion al cliente',
      description: {
        type: 'doc',
        version: 1,
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Solicitud para atencion al cliente ',
              },
            ],
          },
        ],
      },
    },
    {
      id: 13130,
      key: 'SAC-78',
      issueType: 'Solicitud',
      socialReason: 'Giannoni',
      emailReporter: 'admin01@giannoni.com.ar',
      created: '2023-04-14T05:18:29.778-0900',
      updated: '2023-04-25T04:39:25.587-0900',
      status: {
        id: 10153,
        name: 'ABIERTO',
        beClosed: true,
        supportCenterName: 'Abierto',
      },
      summary: 'Solicitud nueva del 14 de Abril de 2023',
      description: {
        type: 'doc',
        version: 1,
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Solicitud nueva del 14 de Abril de 2023 ',
              },
            ],
          },
        ],
      },
    },
    {
      id: 13059,
      key: 'SAC-77',
      issueType: 'Solicitud',
      socialReason: 'Prueba CAR',
      emailReporter: 'QAEquipoCAR@EquipoCAR.com',
      created: '2023-04-13T03:09:30.529-0900',
      updated: '2023-04-25T04:31:15.851-0900',
      status: {
        id: 10153,
        name: 'ABIERTO',
        beClosed: true,
        supportCenterName: 'Confirmar',
      },
      summary: 'Solicito pilas para mouse',
      description: {
        type: 'doc',
        version: 1,
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Solicito pilas para mouse ',
              },
            ],
          },
        ],
      },
    },
    {
      id: 13005,
      key: 'SAC-76',
      issueType: 'Solicitud',
      socialReason: 'Giannoni',
      emailReporter: 'admin01@giannoni.com.ar',
      created: '2023-04-11T05:50:16.251-0900',
      updated: '2023-04-11T05:51:29.571-0900',
      status: {
        id: 10153,
        name: 'ABIERTO',
        beClosed: true,
        supportCenterName: 'Abierto',
      },
      summary: 'Solicitud a At. Al cliente nueva',
      description: {
        type: 'doc',
        version: 1,
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Solicitud a At. Al cliente nueva ',
              },
            ],
          },
        ],
      },
    },
    {
      id: 12651,
      key: 'SAC-75',
      issueType: 'Solicitud',
      socialReason: 'Carga central',
      created: '2023-03-28T00:58:55.695-0900',
      updated: '2023-04-19T10:07:29.502-0900',
      status: {
        id: 10153,
        name: 'ABIERTO',
        beClosed: true,
        supportCenterName: 'respuesta',
      },
      summary: 'Prueba desde IderoTech',
      description: {
        type: 'doc',
        version: 1,
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Falata el logo de infosis en la mesa de servicio ',
              },
            ],
          },
        ],
      },
    },
    {
      id: 12611,
      key: 'SAC-74',
      issueType: 'Reclamo',
      socialReason: 'Prueba CAR',
      emailReporter: 'QAEquipoCAR@EquipoCAR.com',
      created: '2023-03-23T11:22:28.223-0900',
      updated: '2023-03-24T06:18:23.516-0900',
      status: {
        id: 10085,
        name: 'Finalizado',
        beClosed: false,
        supportCenterName: 'Cerrado',
      },
      summary: 'No funciona la facturacion',
      description: {
        type: 'doc',
        version: 1,
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'No funciona la facturacion ',
              },
            ],
          },
        ],
      },
    },
  ],
  page: {
    actualPage: 1,
    pageSize: 10,
    totalPages: 9,
    total: 82,
  },
};
