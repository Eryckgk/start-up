import useAuth from "../../hooks/useAuth"
import getUserDisplayName from "../../utils/getUserDisplayName"
import Post from "../../components/Post/Post"
import StartupCard from "../../components/StartupCard/StartupCard"
import Button from "../../components/Button/Button"
import "./Profile.css"

function Profile() {
    const { user } = useAuth()
    const displayName = getUserDisplayName(user)
    const username = user?.user_metadata?.username?.replace(/^@/, "") ||
        user?.email?.split("@")[0] ||
        "usuario"

    return (
        <div className="profile">

            <main className="profile-content">

                    <section className="profile-header">

                        <div className="profile-avatar">
                            {displayName.charAt(0).toUpperCase()}
                        </div>

                        <div className="profile-info">

                            <h1>{displayName}</h1>

                            <span>@{username}</span>

                            <p>
                                Desenvolvedor apaixonado por tecnologia,
                                startups e criação de produtos.
                            </p>

                            <div className="profile-stats">

                                <span>
                                    <strong>128</strong>
                                    seguidores
                                </span>

                                <span>
                                    <strong>84</strong>
                                    seguindo
                                </span>

                                <span>
                                    <strong>3</strong>
                                    startups
                                </span>

                            </div>

                        </div>

                        <Button variant="outline">
                            Editar perfil
                        </Button>

                    </section>

                    <section className="profile-section">

                        <h2>Minhas startups</h2>

                        <div className="profile-startups">

                            <StartupCard
                                name="StartTech"
                                description="Soluções simples para problemas complexos."
                                category="Tecnologia"
                                stage="MVP"
                                members={4}
                                likes={103}
                            />

                            <StartupCard
                                name="StudyUp"
                                description="Ferramenta para estudantes organizarem seus estudos."
                                category="Educação"
                                stage="Ideia"
                                members={2}
                                likes={58}
                            />

                        </div>

                    </section>

                    <section className="profile-section">

                        <h2>Publicações</h2>

                        <Post
                            author={displayName}
                            username={`@${username}`}
                            time="1d"
                            content="Hoje comecei a trabalhar em uma nova ideia de startup."
                            likes={31}
                            comments={6}
                        />

                    </section>

            </main>

        </div>
    )
}

export default Profile