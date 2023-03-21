import { FC, useEffect } from 'react';

const Instagram = require('instagram-web-api');

interface Props {
  instagramPosts: any;
}

const Actualite: FC<Props> = ({ instagramPosts }) => {
  useEffect(() => {
    console.log('insta', instagramPosts);
  }, []);
  return (
    <div>
      <h1>Instagram Layout</h1>
    </div>
  );
};

export async function getStaticProps(context: any) {
  /*   const client = new Instagram({
    username: 'randomrandom7808',
    password: 'GarageApiWebsite2023',
  }); */
  let posts: any = [];
  const { username, password } = process.env;
  const client = new Instagram({ username, password });
  (async () => {
    await client.login();
    const profile = await client.getProfile();

    console.log(profile);
  })();
  try {
    /*    await client.login().then(() => {
      client.getProfile().then(console.log);
      console.log('Test');
    }); */
    (async () => {
      await client.login();
      const profile = await client.getProfile();

      console.log(profile);
    })();
  } catch (e) {
    console.log('erreur', e);
  }

  /* try {
    await client.login();
    const instagram = await client.getPhotosByUsername({
      username: process.env.INSTAGRAM_USERNAME,
    });
    if (instagram['user']['edge_owner_to_timeline_media']['count'] > 0) {
      // if we receive timeline data back
      //  update the posts to be equal
      // to the edges that were returned from the instagram API response
      posts = instagram['user']['edge_owner_to_timeline_media']['edges'];
    }
  } catch (error) {
    console.log('Error : ', error);
  } */
  return {
    props: {
      instagramPosts: posts,
    },
  };
}

export default Actualite;
