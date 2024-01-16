import testPageStyle from './Card.module.scss'


export function TestCard() {


    return (
        <>
            <div className={testPageStyle.cardBody}>
                <header className={testPageStyle.cardImg}>
                    <img src="https://api.iconify.design/line-md:emoji-grin.svg" alt="You" />
                </header>
                <div className={testPageStyle.info}>
                    <p>Your Name</p>
                    <p>Mail@gmail.com</p>
                    <p>Developer | Designer</p>
                </div>
                <div className={testPageStyle.socials}>
                    <div>
                        <img src="https://api.iconify.design/bxl:facebook-circle.svg" alt="" />
                    </div>
                    <div>
                        <img src="https://api.iconify.design/bxl:instagram-alt.svg" alt="" />
                    </div>
                    <div>
                        <img src="https://api.iconify.design/bxl:sketch.svg" alt="" />
                    </div>
                    <div>
                        <img src="https://api.iconify.design/bxl:tiktok.svg" alt="" />
                    </div>
                </div>
                <footer className={testPageStyle.footer}>
                    <p>120k Followers | 10k Following</p>
                </footer>
            </div>
        </>

    )
}