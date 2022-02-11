export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6206165ec487f364cad2b586',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-m7fv9s1f',
                  apiId: 'd5ddb76c-bff9-4b2d-9501-403d24fb5025'
                },
                {
                  buildHookId: '6206165e8d639163f8c57265',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jjyfvoke',
                  apiId: '6237e21c-4fbc-4d57-9bee-4ebce140f073'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/winstonmhango23/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jjyfvoke.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
