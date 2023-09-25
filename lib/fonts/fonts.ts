import localFont from 'next/font/local'


export const sdsMonotone = localFont({
    src: [
            {
              path: './sdsmonotone-bold-webfont.woff2',
              weight: '700',
              style: 'normal',
            },
            {
                path: './sdsmonotone-webfont.woff2',
                weight: '400',
                style: 'normal',
            },
            {
              path: './sdsmonotone-light-webfont.woff2',
              weight: '100',
              style: 'italic',
            },
          ],
})