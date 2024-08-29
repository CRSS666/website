import AdBanner from '@/components/AdBanner';
import Footer from '@/components/Footer';
import Meta from '@/components/Meta';
import NavBar from '@/components/NavBar';

import PageContent from '@/components/PageContent';

export default function Home() {
  const nations = [ ];

  return (
    <>
      <Meta page={{ title: 'Home' }} />
      <NavBar currentPage="home" />

      <PageContent>
        <h1>Home</h1>

        <p>
          Welcome to Clyde&apos;s Real Survival SMP, CRSS for short. We are a small SMP server that updates to every version starting from b1.0 on the 1st of every month. We have a small community of players that are very friendly and welcoming to new players. We have a few rules that you should follow to make the server a better place for everyone, you can find them at the bottom of the page.
        </p>

        <p>
          The server is built on the idea of nations, featuring { nations.length } nations so far, with the oldest being Panorama Socialist Federation, which was originally known as Republic of Panorama. These nations are scattered around the map, with some being more active than others. You can be sure to find a nation that fits your playstyle, if not you can just start your own!
        </p>

        <h2 id="modpacl">Modpack</h2>

        <p>
          We have a client-side modpack to make your experince on CRSS better, the mods included are intended to be small, simple, and follow the rules of CRSS.
        </p>

        <p>
          You can download it from Modrinth: <a href="https://modrinth.com/modpack/crsspack">https://modrinth.com/modpack/crsspack</a>.
        </p>

        <h2 id="rules">Rules</h2>

        <ol>
          <li>
            The use of modified clients that give an unfair advantage to players, such as hacked clients, is not permitted.

            <ul>
              <li>
                You are not allowed to use them even for their legitimate features, such as a fullbright option.
              </li>
              <li>
                If admins suspect you are hacking you will be immediately banned.
              </li>
            </ul>
          </li>
          <li>
            Do not modify or destroy (grief) other player&apos;s constructions without their consent, or steal any of their items.

            <ul>
              <li>
                You are allowed to visit any build, as long as you don&apos;t take anything, and if you do you pay them back.
              </li>
              <li>
                You should ask permission in the discord or the in-game chat before modifying builds.
              </li>
            </ul>
          </li>
          <li>
            Follow the laws of the nations you are in to avoid issues with other players and making the server unfun to play.

            <ul>
              <li>
                If you feel the laws are too vague, feel free to ask the people in charge of them what they meanr with something, and feel free to contribute to them. Complaining that they don&apos;t make sense won&apos;t get you anywhere.
              </li>
              <li>
                Breaking laws isn&apos;t bannable, the nation you are in will take measures and punish you for your actions as they see fit.
              </li>
            </ul>
          </li>
          <li>
            Do not attempt to make nations where the territory is already owned by another nation.

            <ul>
              <li>
                You can make it near the borders of a nation but never inside one, you can&apos;t just take existing territory as your own.
              </li>
              <li>
                Other nations are free to claim more territory whenever they feel like it, as long as it doesnt take other nations&apos; territory with it.
              </li>
            </ul>
          </li>
        </ol>
      </PageContent>

      <Footer />
    </>
  );
}