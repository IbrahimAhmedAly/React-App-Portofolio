import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'rt5473qi',
    dataset: 'production',
    apiVersion: '2022-04-30',
    useCdn: true,
    token: 'skxsjCclophCo6UBcZx8q41LZlADf51QFBuD8pEAwW9idotJWY4wlqb0MLaUQQ93JFqSMjSWNeo8kxzVDJWGzYkz1x6OzDMLhghmWyx42spxXnEkAavPKm6DWv7vxCxc9kLrodVt9zuHknxI4JU2chpvcyDbbRNZ0AZ0aH9KtPgVYQwwPnWj',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);