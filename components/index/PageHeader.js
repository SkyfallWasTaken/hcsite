import { Box, Button, Flex, Text, Link } from 'theme-ui'
import BGImg from '../background-image'
import Icon from '../icon'
import Comma from '../comma'
import AssembleBannerImg from "../../public/banner.png"

const withCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

function PageHeader({ slackData }) {
    return (
        <Box
            as="header"
            sx={{
                bg: 'cyberpunk.darkerBg',
                pt: [7, 8, '180px'],
                pb: [6, 7, '160px'],
                minHeight: ['50vh'],
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <BGImg
                src={AssembleBannerImg}
                alt="Hack Clubbers at Assemble in SF"
                width={1920}
                height={1080}
                priority
            />
            <Box
                sx={{
                    maxWidth: ['90vw', '85vw', '80vw'],
                    mx: 'auto',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 2
                }}
            >
                <Text
                    as="h1"
                    variant="title"
                    sx={{
                        fontSize: ['42px', '56px', '72px'],
                        mb: 3,
                        background: 'linear-gradient(to right,rgb(200, 215, 219),rgb(255, 253, 255))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textAlign: 'center',
                        textShadow: '0 0 20px rgba(0, 191, 255, 0.3)'
                    }}
                >
                    A Home for High School Makers
                </Text>
                <Text
                    as="p"
                    variant="subtitle"
                    sx={{
                        fontSize: ['18px', '22px', '24px'],
                        maxWidth: '650px',
                        mx: 'auto',
                        mb: 4,
                        color: 'cyberpunk.textInverted',
                        textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
                    }}
                >
                    Join a community of <Comma>{slackData.total_members_count}</Comma> makers, building open source projects and learning to code together.
                </Text>
                <Flex
                    sx={{
                        justifyContent: 'center',
                        gap: 3,
                        flexWrap: 'wrap',
                        color: "cyberpunk.textInverted"
                    }}
                >
                    <Button
                        variant="ctaLg"
                        as="a"
                        href="/slack"
                        sx={{
                            bg: '#8A2BE2',
                            px: 4,
                            py: 3,
                            fontSize: [2, 3],
                            textTransform: 'uppercase',
                        }}
                    >
                        <Text>Join {slackData.total_members_count ? withCommas(slackData.total_members_count) : '60k+'} Teen Hackers</Text>
                    </Button>
                    <Button
                        variant="ctaLg"
                        as="a"
                        href="https://shipwrecked.hack.club/3"
                        sx={{
                            backgroundImage: 'linear-gradient(to right, #00BFFF, #8A2BE2)',
                            px: 4,
                            py: 3,
                            fontSize: [2, 3],
                            textTransform: 'uppercase',
                        }}
                    >
                        Sign Up: Private Island Hackathon
                    </Button>
                </Flex>
                <Flex sx={{
                    gap: [3],
                    my: 1,
                    py: 3,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: ['16px', '18px'],
                    color: 'cyberpunk.textInverted',
                    opacity: 0.95,
                }}>
                    <Text sx={{
                        color: '#33d6a6',
                        fontWeight: 'bold',
                        textShadow: '0 0 10px rgba(51, 214, 166, 0.3)'
                    }}>
                        $3m+ in prizes given
                    </Text>
                    <Text sx={{ color: 'cyberpunk.textInverted' }}>•</Text>
                    <Text>80k+ projects built</Text>
                    <Text sx={{ color: 'cyberpunk.textInverted' }}>•</Text>
                    <Text><Comma>{slackData.total_members_count || 60_000}</Comma> teenage builders</Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default PageHeader; 