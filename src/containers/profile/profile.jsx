import { useState, useEffect, lazy, Suspense } from "react";
import ApolloClient, { gql } from "apollo-boost";
import Loading from "../loading/Loading";
import { Contact } from "../contact/contact";
import { openSource } from "../../data/portfolio";

const GithubProfileCard = lazy(() =>
  import("../../components/github-repo/github-repo")
);

const Profile = () => {
  const [profile, setProfile] = useState(null);

  const getProfileData = async () => {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${openSource.githubConvertedToken}`,
          },
        });
      },
    });

    try {
      const result = await client.query({
        query: gql`
          {
            user(login: "${openSource.githubUserName}") {
              name
              bio
              isHireable
              avatarUrl
              location
            }
          }
        `,
      });
      setProfile(result.data.user);
    } catch (error) {
      console.error(error);
      setProfile("Error");
      openSource.showGithubProfile = "false";
    }
  };

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      getProfileData();
    }
  }, []);

  if (openSource.display && openSource.showGithubProfile === "true") {
    if (typeof profile === "string" || profile instanceof String) {
      return <Contact />;
    }

    return (
      <Suspense fallback={<Loading />}>
        {profile && <GithubProfileCard prof={profile} key={profile.id} />}
      </Suspense>
    );
  }

  return <Contact />;
};

export default Profile;
