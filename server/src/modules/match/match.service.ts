import { Profile } from "../../models/profile.model.js";
import { calculateMatchScore } from "../../utils/calculateMatchScore.js";


export class MatchService{

async getMatches(
userId:string
){

const current=
await Profile.findOne({
userId
});

if(!current)
return [];

const profiles=
await Profile.find({
userId:{
$ne:userId
}
});

const matches=
profiles
.map(profile=>{

const result=
calculateMatchScore(

current.skills,

profile.skills

);

return{

profile,

score:result.score,

commonSkills:
result.commonSkills

};

})
.filter(
m=>m.score>0
)

.sort(
(a,b)=>
b.score-a.score
);

return matches;

}

}

export const
matchService=
new MatchService();