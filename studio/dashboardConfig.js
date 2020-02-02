export default {
  widgets: [
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
                  buildHookId: '5e36882252044e8036eed1c7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-recipe-collection-studio',
                  apiId: '44320d90-860c-477c-838b-6e2a41c0c2d0'
                },
                {
                  buildHookId: '5e368822e9be20ac6d74686d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-recipe-collection',
                  apiId: 'c3be4da2-1930-4302-9e58-75f2a530ec08'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/strangeworlder/sanity-gatsby-recipe-collection',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-recipe-collection.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
