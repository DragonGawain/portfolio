import Button from "@/components/ui/Button";
import PageBase from "@/components/ui/PageBase";
import Tooltip from "@/components/ui/Tooltip";

export default function OperationYJLTG() {
    return (
        <div className="projectPage">
            <h1>Operation: YJLTG</h1>
            <h2>Phantom Game Jam 2024: Operation (hosted by Concordia)</h2>
            <p>
                This game jam was the second that I participated in with the
                express intent of teaching others my game dev skills. The game
                jam had an additional component where teams also had to make a
                custom controller for their game. I was in a team of 6 people.
                One person was dedicated to setting up the controller, one did
                the music, one did the art, and the rest of us were programmers.
                I found that it was much harder to teach my team my skills
                during this jam. Since it lasted a whole week, the in person
                site was not available the entire time. Instead, the in person
                site was only available on the final two days of the jam. This
                made personal interaction a lot harder. I also found that my
                teammates didn't put in as much effort towards the jam as I had
                hoped they would, effectively meaning that my interactions with
                them was lower than I had hoped. In the end, I was somewhat
                disappointed with my goal of passing on knowledge, but enjoyed
                the jam nonetheless.
            </p>
            <h2>About the game</h2>
            <p>
                Our final game design settled on a two phase design. In the
                first phase of the game, the player had to complete a
                <Tooltip
                    text="fetch quest"
                    tooltip="A fetch quest is when the player has to run around the map collecting a variety of items to accomplish a goal"
                />
                , gathering components to fix their space ship. In phase two,
                the player had to survive the hoard of enemies that chased after
                them. We had two distinct types of enemies, humans and aliens.
                Both the player and the human enemies have a ranged weapon that
                they use to attack. The alien enemies only dealt contact damage.
            </p>
            <h2>My contribution</h2>
            <p>
                I did the lion's share of the programming for the game. Notably,
                I created up the AI for the enemies, the character controller,
                the inventory system, and the biome effects (my teammates did
                help with the biomes, as well as other portions of the code that
                I'm not mentioning).
            </p>
            <h2>Technical details</h2>
            <h3>AI</h3>
            <p>
                I spent a lot of the jam time setting up the AI. The aliens and
                humans both have distinct AI, so I'll go over both of them.
                However, both enemies use the same core which I'll go over now.
                Enemies have two state controllers, one for movement, the other
                for combat. Each of these state controllers have substates that
                are described in an enum (so there's a total of two enums). The
                combat state controls what the enemy is doing at any given time.
                It has more general substates such as WANDER, ATTACK, and FLEE.
                The movement state controls <i>how</i> an enemy moves. For
                example, if an enemy tries to move in a straight line and there
                is a wall in the way, the movement state will tell the enemy to
                rotate, allowing it to move around the wall instead of getting
                stuck on it.
            </p>
            <p>
                Enemies use a vision system based on raycasts. In my experience,
                a raycast vision system can result in jitteriness when dealing
                with a wall (the AI controller will rotate back and forth very
                quickly as the wall enters and exits the vision range). To deal
                with this issue, the AI maintains a rotation for a few frames
                after the obstacle is no longer in sight. I did extensive
                testing to ensure that the AI was able to fully avoid obstacles
                regardless of which direction and angle it approached the
                obstacle at.
            </p>
            <h4>Human enemies</h4>
            <p>
                The human enemies have a similar behavior to the player. The run
                around the map collecting ship components and bringing them to
                their ship. Whenever a human got too close to another enemy,
                they would initiate combat. When a human is in combat mode, it
                will chase the target until it gets within a certain range. Once
                it gets close enough, it begins circling the target, randomly
                changing the direction that it circles. The random direction
                change both made them more interesting, and made it so that two
                humans wouldn't be locked in eternal combat with each other. The
                human would also begin periodically shooting its gun at the
                target. Humans have two other key features. If their ship is
                attacked, they will immediately return to the ship to defend it.
                Lastly, if a human got too low on HP, they would seek out a
                medkit, which restores some HP.
            </p>
            <h4>Alien enemies</h4>
            <p>
                Alien enemies spawned around alien bases. Alien bases spawn up
                to a maximum of 10 aliens (per base). Once the number of aliens
                that belong that that base drops below 5, it would resume
                spawning. The aliens themselves would use a WANDER movement
                pattern to wander around the base. If the player or a human got
                too close to the base, attacked any of the aliens, or attacked
                the base, all the aliens would chase after the target. If the
                target managed to get a certain distance away from the alien
                base, they would give up chase. However, the aliens would also
                give chase for a minimum of 30 seconds so that players couldn't
                remove alien aggro instantly and freely attack them. The aliens
                were also able to handle multiple targets - if the base/aliens
                were attacked by multiple targets, each individual alien would
                randomly choose a single target to chase after. This made the
                aliens feel much more natural. For example, if the player and a
                human enemy both triggered the same alien base, but then the
                human enemy got away, all the aliens that were chasing the human
                enemy would shift focus to the player.
            </p>
            <p>
                All in all, I'm quite pleased with how the AI turned out. It
                feels like there's an ecosystem outside of just the player.
                Combined with the sound design that allows the player to hear
                things that they cannot see, it induces a feeling that they are
                in a warzone. The constant sounds of human enemies shooting and
                alien hurt and attack sounds going off add to the vibe of the
                game.
            </p>
            <h3>Biomes</h3>
            <p>
                The game features four different biomes, each with a unique item
                at their center. Each biome also had a different range for the
                number of human and alien enemies that it could spawn. The idea
                behind that was that it would give each biome a different feel.
                For example, the swamp biome spawns a lot of aliens and not many
                humans, whereas the asphalt biome is the opposite. Each biome
                also contains different ship components, forcing the player to
                explore all of them throughout a game.
            </p>
            <h4>Normal</h4>
            <p>
                The normal biome has no special features. It is where the player
                starts, so we wanted it to be simple. The player initially
                starts very near to their ship, as well as the special item that
                the normal biome offers, the basic pistol which serves as their
                first weapon.
            </p>
            <h4>Forest</h4>
            <p>
                The forest biome is the most unique. Inside the forest biome,
                ship components are hidden. The player has a flashlight that
                casts light in front of them. Ship components only become
                visible if the light is shining on them. In the center of the
                forest, players find an improved flashlight that shines in a
                circle around the player as opposed to only in an arc in front
                of them. This lighting mechanic was done via the use of sprite
                masks. Each of the components is hidden under a sprite that
                becomes invisible if the sprite mask of the flashlight is on top
                of it. The forest contains a similar number of enemies that the
                normal biome does.
            </p>
            <h4>Asphalt</h4>
            <p>
                The special trait of the asphalt biome is that the player moves
                faster while in it. The asphalt biome features a higher density
                of human enemies and a lower density of aliens. In the center of
                the asphalt biome, the player will find an improved gun which
                shoots faster, more damaging bullets.
            </p>
            <h4>Swamp</h4>
            <p>
                The special trait of the swamp biome is that the player moves
                slower while in it. The swamp biome features a higher density of
                aliens and a lower density of humans. In the center of the swamp
                biome, the player will find swamp boots which negate the speed
                penalty of the biome.
            </p>
            <h3>Endgame</h3>
            <p>
                Once the player has fixed their ship, the game enters phase two
                - a 5 minute survival. At the start of phase two, every single
                enemy on maps starts targetting the player. If they manage to
                survive the five minutes, the player wins! In phase 2, the
                player pilots their space ship. To represent this, the weapon
                cooldowns are massively reduced, allowing the player to shoot
                much faster. In addition, they are no longer affected by the
                biome specific speed changes. To set this up without needing to
                make a new character controller, the ship sprite simply follows
                the player while the player sprite is set to be invisible. By
                tweaking some numbers, such as move speed, maximum health, etc,
                I was able to easily make it feel like the ship was moving
                instead of the player.
            </p>
            <h2>Final thoughts</h2>
            <p>
                I enjoyed making all the AI and the other systems during this
                jam! From a technical standpoint, I feel that I did a good job
                with my implementation. There aren't any bugs in the AI that I'm
                aware of. While the game could be better balanced (for example,
                the five minute timer in phase two could be shorter), the game
                is functionally complete. I do wish that my teammates had taken
                advantage of the opportunity to learn more, but I did what I
                could to make myself accessible. In the future, I don't plan on
                using longer format jams to teach what I know.
            </p>
            <h3>Technical details overview</h3>
            <ul>
                <li>Unity version 2022.3.16f1</li>
                <li>Group project (team of 6)</li>
                <li>7 day game jam</li>
                <li>Art assets made by the team</li>
                <li>Sound assets made by the team</li>
                <li>Date originally completed: October 20, 2024</li>
            </ul>
            <Button
                colorScheme="itch"
                href="https://dragongawain.itch.io/operation-yjltg"
                text="View on itch"
            />
            <Button
                colorScheme="git"
                href="https://github.com/DragonGawain/phantom_game_jam"
                text="View the source code"
            />
            <Button href="../" text="Return to Main Menu" newTab={false} />
        </div>
    );
}
