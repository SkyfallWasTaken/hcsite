import { Box, Button, Flex, Text, Link, Grid, Card } from 'theme-ui'
// import BGImg from '../background-image' // Removed unused import
// import Icon from '../icon' // Removed unused import
// import Comma from '../comma' // Removed unused import
import AssembleBannerImg from "../../public/banner.png"
import FlagshipImg from "../../public/home/flagship_4.jpg"
import OuternetImg from "../../public/outernet/hack.jpg"
import Photo from '../photo'
import Comma from '../comma'

const withCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// Helper for stats
const Stat = ({ value, unit, sx = {} }) => (
    <Flex sx={{ alignItems: 'center', ...sx }}>
        <Text
            as="span"
            sx={{
                color: 'black',
                fontSize: ['16px', '18px', '20px'],
                fontWeight: 'bold',
                lineHeight: '1.2',
                px: 2,
                display: 'inline-block'
            }}
        >
            {value}
        </Text>
        <Text as="span" sx={{ fontSize: ['14px', '16px'], color: "black", lineHeight: '1.3' }}>
            {unit}
        </Text>
    </Flex >
)

function PageHeader({ slackData }) {
    const stats = {
        members: slackData?.total_members_count || 66909,
        events: 32,
        prizes: '$5,000,000+',
        shipped: 81762
    }

    const photoPositions = [
        { top: '2%', left: '3%', rotation: -4, zIndex: 1, photo: AssembleBannerImg },
        { top: '20%', left: '38%', rotation: 5, zIndex: 2, photo: FlagshipImg },
        { top: '48%', left: '10%', rotation: -2, zIndex: 1, photo: OuternetImg },
    ]

    return (
        <Box
            as="header"
            sx={{
                bg: 'white',
                pt: [5, 6, '100px'],
                pb: [5, 6, '100px'],
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
            }}
        >
            <Grid
                gap={[4, 5]}
                columns={['1fr', '1.2fr 0.8fr']}
                sx={{
                    maxWidth: '1200px',
                    mx: 'auto',
                    px: [3, 4],
                    position: 'relative',
                    zIndex: 2,
                    alignItems: 'center'
                }}
            >
                <Box sx={{ pr: [0, 0, 5] }}>
                    <Text
                        as="h1"
                        variant="title"
                        sx={{
                            fontSize: ['38px', '52px', '64px'],
                            mb: 3,
                            color: 'titleBrown',
                            textAlign: 'left',
                            lineHeight: 'tight',
                            fontWeight: 'bold'
                        }}
                    >
                        Discover the joy of code,
                        together.
                    </Text>
                    <Text
                        as="p"
                        variant="subtitle"
                        sx={{
                            fontSize: ['17px', '20px'],
                            maxWidth: '550px',
                            mb: 4,
                            color: 'subtitleGrey',
                            textAlign: 'left',
                            lineHeight: '1.6'
                        }}
                    >
                        Join a community of makers, building incredible projects and learning to code together.
                    </Text>

                    <Flex sx={{ flexWrap: 'wrap', mb: 4, alignItems: 'center' }}>
                        We've given out over $5,000,000 in prizes to <Comma>{stats.members}</Comma> hackers!
                    </Flex>

                    <Button
                        variant="ctaLg"
                        as="a"
                        href="/slack"
                        sx={{
                            bg: 'hcRed',
                            color: 'white',
                            px: [4, 5],
                            py: [3, '18px'],
                            fontSize: [2, 3],
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            borderRadius: 'default',
                            boxShadow: '0 4px 12px rgba(236, 55, 80, 0.4)',
                            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 16px rgba(236, 55, 80, 0.5)'
                            }
                        }}
                    >
                        Join a community of makers
                    </Button>

                    <Card
                        sx={{
                            mt: [4, 5],
                            p: [3, 4],
                            bg: 'hackathonBannerBg',
                            borderRadius: 'lg',
                            textAlign: 'left',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                            maxWidth: '550px',
                            transform: 'rotate(1deg)'
                        }}
                    >
                        <Text sx={{ fontWeight: 'bold', fontSize: [2, 3], color: 'hackathonBannerText', display: 'block', mb: 2 }}>
                            WE'RE RUNNING A PRIVATE ISLAND HACKATHON
                        </Text>
                        <Text sx={{ fontSize: [1, '17px'], color: 'hackathonBannerText', lineHeight: '1.6', mb: 3 }}>
                            On August 8-11, you and 130 other students will gather on Cathleen Stone Island in the Boston Harbor for Shipwrecked: a once in a lifetime, 4-day story-based hackathon!
                        </Text>
                        <br /><br />
                        <Button
                            as="a"
                            href="https://shipwrecked.hack.club/3"
                            sx={{
                                bg: 'hackathonButtonBg',
                                color: 'hackathonButtonText',
                                px: [3, 4],
                                py: 2,
                                fontSize: [1, 2],
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                borderRadius: 'default',
                                border: 'none',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
                                }
                            }}
                        >
                            Sign Up Now
                        </Button>
                    </Card>
                </Box>

                <Box sx={{ position: 'relative', minHeight: ['300px', '400px', '500px'] }}>
                    {photoPositions.map((style, index) => (
                        <Photo
                            key={index}
                            src={style.photo}
                            alt="Hack Clubbers coding together"
                            width={200}
                            height={150}
                            showAlt={false}
                            sx={{
                                position: 'absolute',
                                width: ['190px', '270px', '370px'],
                                height: ['121px', '172px', '235px'],
                                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                borderRadius: 'lg',
                                transform: `rotate(${style.rotation}deg) ${style.transform || ''}`,
                                top: style.top,
                                left: style.left,
                                zIndex: style.zIndex,
                                opacity: style.opacity || 1,
                                img: { borderRadius: 'lg' }
                            }}
                        />
                    ))}
                </Box>
            </Grid>
        </Box>
    )
}

export default PageHeader; 