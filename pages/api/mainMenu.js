export default function mainMenuApi(req, res) {
    res.status(200).json([
        { name: 'Tecnologias', target: '/tecnologias' },
        { name: 'Posts', target: '/posts' },
        { name: 'Portafolio', target: '/portafolio' },
        { name: 'about', target: '/about' },
    ])
}
