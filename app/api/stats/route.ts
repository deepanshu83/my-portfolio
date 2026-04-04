import { NextResponse } from "next/server";

const GITHUB_USERNAME = "deepanshu83";
const LEETCODE_USERNAME = "deepanshujangid";
const CODEFORCES_HANDLE = "deepanshu83";

async function fetchGitHubStats() {
  const githubUser = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
    headers: { Accept: "application/vnd.github.v3+json" },
    cache: "no-store",
  });

  if (!githubUser.ok) {
    throw new Error("GitHub user fetch failed");
  }

  const userData = await githubUser.json();
  const repoList = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
    headers: { Accept: "application/vnd.github.v3+json" },
    cache: "no-store",
  });

  const repos = repoList.ok ? await repoList.json() : [];
  const stars = Array.isArray(repos) ? repos.reduce((sum, repo) => sum + (repo.stargazers_count ?? 0), 0) : 0;

  let contributions: number | string = "—";
  try {
    const profileHtml = await fetch(`https://github.com/${GITHUB_USERNAME}`, { cache: "no-store" }).then((res) => res.text());
    const match = profileHtml.match(/([\d,]+) contributions? in the last year/);
    if (match) contributions = Number(match[1].replace(/,/g, ""));
  } catch {
    contributions = "—";
  }

  return {
    contributions,
    repos: userData.public_repos ?? 0,
    stars,
    streak: userData.hireable === null ? "—" : "—",
  };
}

async function fetchLeetCodeStats() {
  const query = `query getUserProfile($username: String!) { matchedUser(username: $username) { submitStats { acSubmissionNum { difficulty count submissions } } } }`;
  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ query, variables: { username: LEETCODE_USERNAME } }),
  });

  if (!response.ok) {
    throw new Error("LeetCode profile fetch failed");
  }

  const json = await response.json();
  const stats = json?.data?.matchedUser?.submitStats?.acSubmissionNum ?? [];
  const getCount = (difficulty: string) => {
    const item = stats.find((entry: any) => entry.difficulty === difficulty);
    return item?.count ?? 0;
  };
  const solved = getCount("All");

  return {
    solved,
    easy: getCount("Easy"),
    medium: getCount("Medium"),
    hard: getCount("Hard"),
    rating: "—",
    topPercentage: "—",
    streak: "—",
  };
}

async function fetchCodeforcesStats() {
  const [userInfoRes, ratingRes, statusRes] = await Promise.all([
    fetch(`https://codeforces.com/api/user.info?handles=${CODEFORCES_HANDLE}`, { cache: "no-store" }),
    fetch(`https://codeforces.com/api/user.rating?handle=${CODEFORCES_HANDLE}`, { cache: "no-store" }),
    fetch(`https://codeforces.com/api/user.status?handle=${CODEFORCES_HANDLE}&from=1&count=10000`, { cache: "no-store" }),
  ]);

  const userInfoData = await userInfoRes.json();
  const ratingData = await ratingRes.json();
  const statusData = await statusRes.json();

  const user = Array.isArray(userInfoData?.result) ? userInfoData.result[0] : null;
  const solvedSet = new Set<string>();

  if (Array.isArray(statusData?.result)) {
    statusData.result.forEach((submission: any) => {
      if (submission.verdict === "OK") {
        const problem = submission.problem;
        if (problem?.contestId != null && problem?.index) {
          solvedSet.add(`${problem.contestId}-${problem.index}`);
        }
      }
    });
  }

  return {
    rating: user?.rating ?? "Unrated",
    maxRating: user?.maxRating ?? "—",
    rank: user?.rank ? user.rank.charAt(0).toUpperCase() + user.rank.slice(1) : "Unrated",
    solved: solvedSet.size,
    contests: Array.isArray(ratingData?.result) ? ratingData.result.length : 0,
  };
}

export async function GET() {
  try {
    const [github, leetcode, codeforces] = await Promise.all([
      fetchGitHubStats(),
      fetchLeetCodeStats(),
      fetchCodeforcesStats(),
    ]);

    return NextResponse.json({ github, leetcode, codeforces });
  } catch (error) {
    console.error("/api/stats error:", error);
    return NextResponse.json(
      {
        github: { contributions: "—", repos: 0, stars: 0, streak: "—" },
        leetcode: { solved: 0, easy: 0, medium: 0, hard: 0, rating: "—", topPercentage: "—", streak: "—" },
        codeforces: { rating: "Unrated", maxRating: "—", rank: "Unrated", solved: 0, contests: 0 },
      },
      { status: 500 }
    );
  }
}
