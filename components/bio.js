import Icon from '@hackclub/icons'
import { useState } from 'react'
import { Avatar, Box, Card, Flex, Text, Link } from 'theme-ui'

export default function Bio({ popup = true, spanTwo = false, ...props }) {
  const { img, name, teamRole, pronouns, text, subrole, email, href, video } =
    props
  const [expand, setExpand] = useState(false)
  return (
    <>
      <Card
        bg="snow"
        p={popup ? [2, 2, 2] : [3, 3, 3]}
        py={popup ? [3, 3, 3] : [4, 4, 4]}
        sx={{
          display: 'flex',
          alignItems: popup ? 'center' : 'flex-start',
          transition: 'transform 0.125s ease-in-out',
          '&:hover': { transform: 'scale(1.025)' },
          cursor: (text && popup) || href ? 'pointer' : null,
          textDecoration: 'none',
          maxWidth: '600px',
          zIndex: !popup ? 1003 : 5,
          maxHeight: '90vh',
          overflowY: 'hidden',
          overscrollBehavior: 'contain',
          gridColumn: !spanTwo ? null : [null, null, '1 / span 2'],
          position: 'relative'
        }}
        as={href && !text ? 'a' : 'div'}
        {...(href && !text ? { href, target: "_blank" } : {})}
        onClick={() => {
          if (text && popup) {
            setExpand(true)
          }
        }}
      >
        <Avatar
          size={64}
          width={64}
          height={64}
          mr={3}
          src={img}
          alt={name}
          sx={{
            overflow: 'hidden',
            objectFit: 'cover',
            transition: 'transform 0.125s ease-in-out',
            '&:hover': { transform: 'rotate(-8deg) scale(1.25)' },
            flexShrink: 0,
            width: '64px',
            height: '64px'
          }}
        />
        <Box>
          <Text sx={{ fontSize: [3, 3, 3] }} variant="headline" color="black">
            {name}
          </Text>
          <Flex>
            <Text>
              <Text
                color="#24B5A5"
                variant="subheadline"
                sx={{
                  mb: ['0px', '0px', '0px'],
                  fontSize: '1.1em',
                  width: 'fit-content'
                }}
              >
                {teamRole}
              </Text>
              {subrole && (
                <>
                  <br />
                  <Text
                    color="#24B5A5"
                    sx={{
                      mb: ['0px', '0px', '0px'],
                      fontSize: 1,
                      fontWeight: 400,
                      width: 'fit-content'
                    }}
                  >
                    {subrole}
                  </Text>
                </>
              )}
              {pronouns && (
                <Text sx={{ fontSize: 1, align: 'center' }} ml={1} color="muted">
                  ({pronouns})
                </Text>
              )}
            </Text>
          </Flex>
          {!popup &&
            email &&
            (email.includes('@') ? (
              <Link color="muted" href={`mailto:${email}`}>
                {email}
                <br />
              </Link>
            ) : (
              <Link
                color="muted"
                href={`mailto:${email}@hackclub.com`}
              >
                {email}@hackclub.com
                <br />
              </Link>
            ))}

          {!popup && (
            <>
              <Text mt={2} mb={0} color="black">
                {text}
              </Text>
              {video && (
                <Flex
                  sx={{
                    marginTop: 4,
                    marginX: 5,
                    justifyContent: 'center',
                    aspectRatio: 4 / 3
                  }}
                >
                  <iframe
                    width="100%"
                    src={video}
                    title="YouTube video player"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </Flex>
              )}
            </>
          )}
          {!popup && href && (
            <Flex sx={{ alignItems: 'center' }}>
              <Text
                sx={{
                  transform: 'translateX(-4px) translateY(2px)',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                <Icon glyph="external-fill" size={24} />
              </Text>
              <Link
                mt={1}
                mb={0}
                color="black"
                as={'a'}
                href={href}
                target="_blank"
                sx={{ transform: 'translateX(-2px)' }}
              >
                {href}
              </Link>
            </Flex>
          )}
        </Box>
      </Card>
      {popup && expand && (
        <Flex
          sx={{
            position: 'fixed',
            zIndex: 1004,
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.6)',
            pb: 4
          }}
        >
          <Bio {...props} popup={false} />
          <Flex
            sx={{
              position: 'fixed',
              zIndex: 1002,
              top: 0,
              left: 0,
              height: '100vh',
              width: '100vw',
              alignItems: 'center',
              justifyContent: 'center',
              pb: 4
            }}
            onClick={() => setExpand(false)}
          />
        </Flex>
      )}
    </>
  )
}
