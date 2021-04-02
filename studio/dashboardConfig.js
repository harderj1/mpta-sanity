export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606770fea2dd9320adb06b6a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8j69ijve',
                  apiId: 'f4eb4f8b-d609-473a-a08d-e01ea1a39a19'
                },
                {
                  buildHookId: '606770fecdd8a830df112056',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-syo2zfsf',
                  apiId: 'e9a3a881-d946-49b4-8c1d-befb50c64360'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/harderj1/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-syo2zfsf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
