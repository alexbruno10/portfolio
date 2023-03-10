import { GithubLogo, LinkedinLogo, Envelope  } from '@phosphor-icons/react'

export default function Header() {
    return(
        <>
            <header>
                <div className="flex justify-between">
                    <div className="flex gap-8">
                        <a href="#skills">Skill</a>
                        <span>Experience</span>
                        <span>Projects</span>
                    </div>
                    <div className='flex gap-4'>
                        <GithubLogo size={22} weight="fill"/>
                        <LinkedinLogo size={22} weight="fill"/>
                        <Envelope size={22} weight="fill"/>
                    </div>
                </div>
            </header>
        </>
    )
};
