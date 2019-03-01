import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Link from 'next/link';

export default function index(props) {
  return (
    <Query query={GET_USERS}>
      {({ loading, error, data }) => (
        <div>
          { loading ? 'Loading...' :
            <ul>
              {data.users.map(user =>
                <li key={user.id}>
                  <Link href={`/user?id=${user.id}`}>
                    <a>{user.name}</a>
                  </Link>
                </li>
              )}
            </ul>
          }
        </div>
      )}
    </Query>
  );
};

const GET_USERS = gql`
  {
    users {
      id
      name
    }
  }
`;