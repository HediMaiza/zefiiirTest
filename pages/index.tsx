import type { NextPage } from 'next';
import { getRandomHomes } from '../business/getRandomHomes';

import { HomeList } from '../components/HomeList';
import { Layout } from '../components/Layout';

interface Props { home: Home[] }

const Index: NextPage<Props> = ({ home }: Props) => (
   <Layout>
    <HomeList homes={home} />
  </Layout>
);

export async function getStaticProps() {
  return {
    props: {
      home: await getRandomHomes()
    }
  };
}

export default Index;