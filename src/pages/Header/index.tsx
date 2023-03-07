import { GithubLogo, LinkedinLogo, Envelope  } from '@phosphor-icons/react'

export default function Header() {
    return(
        <>
            <header className="w-auto ml-12 mr-12 mt-6">
                <div className="flex justify-between">
                    <div className="flex gap-8">
                        <span>Skills</span>
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
