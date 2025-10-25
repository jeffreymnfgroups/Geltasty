import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
            <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={117}
                height={34}
                style={{ width: '100%', height: 'auto', maxWidth: '117px', maxHeight: '34px' }}
                quality={100}
                priority={true}
                className='dark:hidden'
            />
            <Image
                src="/images/logo/Logo.svg"
                alt="logo"
                width={117}
                height={34}
                style={{ width: '100%', height: 'auto', maxWidth: '117px', maxHeight: '34px' }}
                quality={100}
                className='dark:block hidden'
            />
        </Link>
    );
};

export default Logo;
