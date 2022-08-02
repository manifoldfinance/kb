import React from 'react';
import clsx from 'clsx';
import styles from './Footer.module.css';
import Link from '@docusaurus/Link';
import MediumImage from '../../../static/img/icons/medium.svg';
import TwitterImage from '../../../static/img/icons/twitter.svg';
import DiscordImage from '../../../static/img/icons/discord.svg';
import TelegramImage from '../../../static/img/icons/telegram.svg';
import GithubImage from '../../../static/img/icons/github.svg';
import ChevronRightImg from '../../../static/img/chevron-right.svg';


const FooterLinks = {
    links: [
        {
            title: 'Governance',
            links: [
                {
                    title: 'DAO',
                    link: '#'
                },
                {
                    title: '$FOLD token',
                    link: '#'
                },
                {
                    title: 'Proposals',
                    link: '#'
                }
            ]
        },
        {
            title: 'Support',
            links: [
                {
                    title: 'Help center',
                    link: '#'
                },
                {
                    title: 'Terms of service',
                    link: '#'
                },
                {
                    title: 'Privacy policy',
                    link: '#'
                }
            ]
        },
        {
          title: 'Products',
          links: [
              {
                  title: 'SwitchBoard',
                  link: '#'
              },
              {
                  title: 'OpenMev',
                  link: '#'
              },
              {
                  title: 'Backbone',
                  link: '#'
              }
          ]
      },
    ],
    socialMedia: [
        {
            href: 'https://medium.com/@manifoldfinance',
            image: <MediumImage/>
        },
        {
            href: 'https://twitter.com/foldfinance',
            image: <TwitterImage/>
        },
        {
            href: 'https://forums.manifoldfinance.com ',
            image: <DiscordImage/>
        },
        {
            href: 'https://t.me/manifoldfinance',
            image: <TelegramImage/>
        },
        {
            href: 'https://github.com/manifoldfinance',
            image: <GithubImage/>
        }
    ]
}

export default function Footer() {
    return (
        <section className={styles.footerTopBorder}>
            <div className={clsx('page-container', styles.footer)}>
                <div className={styles.footerColumnWrap}>
                    {
                        FooterLinks.links.map((props, idx) => (
                            <div className={styles.footerColumn} key={idx}>
                                <span className={styles.footerColumnTitle}>{props.title}</span>
                                {
                                    props.links.map((linkProps, index) => (
                                        <Link key={index} className={styles.footerColumnLink} to={linkProps.link}>
                                            {linkProps.title}
                                        </Link>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div>
                    <p className={styles.footerSubscribeTitle}>Subscribe to newsletter</p>
                    <p className={styles.footerSubscribeText}>Get the latest news and updates</p>
                    <Link to='#'
                          className={styles.footerSubscribeButton}>
                        <span className={styles.footerSubscribeButtonText}>Subscribe</span>
                        <ChevronRightImg/>
                    </Link>
                    <div className={styles.socialMediaWrap}>
                        {
                            FooterLinks.socialMedia.map((media, idx) => (
                                <Link className={styles.socialMediaLink} to={media.href} key={idx}>
                                    {media.image}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={clsx('page-container', styles.afterFooter)}>
                <div className={styles.footerLogoContainer}>
                    <span>&copy; {new Date().getFullYear()} Manifold Finance, Inc - All Rights Reserved.</span>
                </div>
                <a href="https://www.manifoldfinacne.com">Staking</a>
                <a href="https://ethereum.org/" target="_blank">Ethereum</a>
            </div>
        </section>
    );
}
