import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()

  // const [data, setData] = useState([])
//     useEffect(() => {
//         fetch('httpsL//api.github.com/users/kkaushik14')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             setData(data)
//         })
//     }, [])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center">
          <img
            src={data.avatar_url}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-300 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
          <p className="text-gray-600">@{data.login}</p>
          <p className="text-center text-gray-700 mt-2">{data.bio}</p>
          <div className="flex space-x-4 mt-4 text-sm text-gray-600">
            {data.location && <span>📍 {data.location}</span>}
            <span>📁 {data.public_repos} Repos</span>
          </div>
        </div>

        <div className="flex justify-around mt-6 text-center">
          <div>
            <p className="text-xl font-semibold">{data.followers}</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div>
            <p className="text-xl font-semibold">{data.following}</p>
            <p className="text-gray-600">Following</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/kkaushik14');
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub data');
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
