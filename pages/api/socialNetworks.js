export default function socialNetworks(req, res) {
    res.status(200).json([
        {
            name: 'Linkedin',
            URL: 'https://www.linkedin.com/in/marco-aldana-/',
            icon: 'fi fi-brands-linkedin',
            newTab: true,
        },
        {
            name: 'GitHub',
            URL: 'https://github.com/Marco-Aldana',
            icon:  'fi fi-brands-github',
            newTab: true,
        },
        {
            name: 'Youtube',
            URL: 'https://www.youtube.com/channel/UCpAQKQnZqi1mvvqJbzTvBNw',
            icon: 'fi fi-brands-youtube',
            newTab: true,
        },
        {
            name: 'Sobre Mi',
            URL: '/about',
            icon: "fi fi-sr-user",
            newTab: false,
        },
    ])
}
