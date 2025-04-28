import InfiniteMenu from '@/components/ui/InfiniteMenu'

function Subreddits() {

    const items = [
        {
            image: 'https://res.cloudinary.com/ddhgblvij/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1745785517/7cz23bca9hse1_nunsmy.png',
            link: 'https://google.com/',
            title: '',
            description: 'wholesomememes'
        },
        {
            image: 'https://res.cloudinary.com/ddhgblvij/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_blue,b_rgb:262c35/v1745785961/t9qoz007texe1_qwuuog.jpg',
            link: 'https://google.com/',
            title: '',
            description: 'memes'
        },
        {
            image: 'https://res.cloudinary.com/ddhgblvij/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_green,b_rgb:262c35/v1745786266/3f471s7jhdxe1_cul5jm.jpg',
            link: 'https://google.com/',
            title: '',
            description: 'meme'
        },
        {
            image: 'https://res.cloudinary.com/ddhgblvij/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_orange,b_rgb:262c35/v1745786381/2fo8xg6nydxe1_tj55xa.jpg',
            link: 'https://google.com/',
            title: '',
            description: 'dank_meme'
        },
        {
            image: 'https://res.cloudinary.com/ddhgblvij/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_yellow,b_rgb:262c35/v1745786733/clh8c5bbtbxe1_ow66wt.png',
            link: 'https://google.com/',
            title: '',
            description: 'dankmemes'
        },
        {
            image: 'https://res.cloudinary.com/ddhgblvij/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_purple,b_rgb:262c35/v1745787556/6ldh2day3fxe1_sln7nt.jpg',
            link: 'https://google.com/',
            title: '',
            description: 'shitposting'
        },
        {
            image: 'https://res.cloudinary.com/ddhgblvij/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_pink,b_rgb:262c35/v1745787756/75kjpvikaywe1_q2dhhe.jpg',
            link: 'https://google.com/',
            title: '',
            description: 'RelationshipMemes',
        },
        {
            image: 'https://res.cloudinary.com/ddhgblvij/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_brown,b_rgb:262c35/v1745787908/zi8rhpcs52we1_cxgtql.jpg',
            link: 'https://google.com/',
            title: '',
            description: 'HistoryMemes'
        },
    ];

    return (
        <InfiniteMenu items={items} />
    )
}

export default Subreddits