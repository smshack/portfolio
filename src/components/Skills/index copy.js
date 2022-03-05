import React, { useEffect, useState } from 'react';
import _ from 'lodash';
const Skill = ({ height }) => {
    const [skillTab, setSkillTab] = useState('react')
    const [skillTab2, setSkillTab2] = useState('react')

    let skillList = [
        {
            skill: 'react',
            desc: "프론트에서 동작하는 VDOM 랜더링의 이해 및 HOOK 사용 가능",
            sub: [
                {
                    use: 'CRA',
                    description: "기본적으로 리액트 앱 구동",
                    url: "https://ko.reactjs.org/docs/react-api.html"
                }, // 기본적으로 리액트 앱 구동 및 package.json 패키지 관리에 대한 이해가 있음
                {
                    use: 'react-route-dom',
                    description: " SPA로 화면을 전환하기 위한 모듈 사용 능숙함",
                    url: "https://v5.reactrouter.com/"
                }, // SPA로 화면을 전환하기 위한 모듈 사용 | BrowserRouter | Switch | Link | useHistory | useLocation | useParams | 
                {
                    use: "react-hook-form",
                    description: "리액트에서 폼 사용 가능",
                    url: ""
                },
                {
                    use: "",
                    description: "",
                    url: ""
                },
                {
                    use: "",
                    description: "",
                    url: ""
                },
                {
                    use: "",
                    description: "",
                    url: ""
                },
                {
                    use: "",
                    description: "",
                    url: ""
                },
                {
                    use: "",
                    description: "",
                    url: ""
                }
            ]
        },
        {
            skill: 'node.js',
            desc: "자바스크립트 런타임 환경에서 기본적인 ES6 사용 및 npm 패키지 관리 및 앱 관리",
            sub: [
                {
                    use: 'npm',
                    description: "packge.json을 이용한 패키지 관리 및 스크립트 작성 가능",
                    url: "https://ko.reactjs.org/docs/react-api.html"
                }, // 기본적으로 리액트 앱 구동 및 package.json 패키지 관리에 대한 이해가 있음
            ]
        },
        {
            skill: 'DB',
            desc: "SQL 및 NOSQL에 대한 기본적인 사용",
            sub: [
                {
                    use: 'oracle',
                    description: "오라클 사용 가능",
                    url: "https://ko.reactjs.org/docs/react-api.html"
                }, // 기본적으로 리액트 앱 구동 및 package.json 패키지 관리에 대한 이해가 있음
            ]
        },
        {
            skill: 'docker',
            desc: "도커 - 이미지 - 컨테이너에 대한 이해 및 Dockerfile compose Volume의 대한 이해",
            sub: [
                {
                    use: 'image1',
                    description: "오라클 사용 가능",
                    url: "https://ko.reactjs.org/docs/react-api.html"
                }, // 기본적으로 리액트 앱 구동 및 package.json 패키지 관리에 대한 이해가 있음
            ]
        },
        {
            skill: 'kubenetes',
            desc: "컨테이너 오케스트레이션을 위한 노드(워커,마스터 ...) 구성 및 기본적인 kubectl 사용 가능 및 이해",
            sub: [
                {
                    use: 'k8s',
                    description: "kube설치",
                    url: "https://ko.reactjs.org/docs/react-api.html"
                }, // 기본적으로 리액트 앱 구동 및 package.json 패키지 관리에 대한 이해가 있음
            ]
        }
    ]
    useEffect(() => {
        console.log(skillTab)
        console.log(_.find(skillList, { skill: skillTab }))
    }, [skillTab])
    return (
        <div className='skills' style={{ height: height }}>
            <div className='title'>
                <h1>
                    SKILLS
                </h1>
            </div>
            <div className='content'>
                <div className='nav'>
                    <ul>
                        {skillList.map((skill, idx) => {
                            return (
                                <li key={idx}>
                                    <button onClick={() => setSkillTab(_.get(skill, 'skill'))}>{_.get(skill, 'skill')}</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='skill-contents'>
                    <ul className='skill-contents-nav'>
                        {_.get(_.find(skillList, { skill: skillTab }), 'sub').map((con, idx) => {
                            console.log(con)
                            return (
                                <li><button>{_.get(con, 'use')}</button></li>
                            )
                        })}
                    </ul>
                    <div className='skill-content'>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Skill;