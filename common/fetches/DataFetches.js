const { MakeBlueApiRequest } = require("../apis/BlueApiRequest");
const { MakeFirstApiRequest } = require("../apis/FirstApiRequest");
const TeamModel = require("../../common/models/Team");
const MatchModel = require("../../common/models/Match");
const CompModel = require("../../common/models/Comp");


module.exports = {
    FetchBlueCompData: async (compID, blueID) =>
    {
        console.log(blueID);

        // Gets All Teams At An Event
        const rawTeams = await MakeBlueApiRequest("/event/" + blueID + "/teams/simple")

        teamList = []
            
        for(var i = 0; i < rawTeams.length; i++) {
            team = rawTeams[i]
            avatar = ""
            try{
                rawAvatar = await MakeFirstApiRequest("/2024/avatars?teamNumber=" + team.team_number);
                //console.log(rawAvatar.teams[0].encodedAvatar)
                avatar = rawAvatar.teams[0].encodedAvatar
            }
            catch{
                console.log("Failed to get " + team.team_number + "'s Avatar")
            }
            finalTeam = {
                teamNum: team.team_number,
                name: team.nickname,
                avatar: avatar,
                organization: team.name,
                location: team.city + ", " + team.state_prov
            };

            teamList.push(team.team_number)

            TeamModel.createTeam(team.team_number, finalTeam);
        };

        CompModel.updateComp({ id: compID }, { teams: JSON.stringify(teamList) });

        const rawMatches = await MakeBlueApiRequest("/event/" + blueID + "/matches/simple")

        for(var i = 0; i < rawMatches.length; i++) {
            match = rawMatches[i]
            if(match.comp_level == 'qm'){
                //console.log(rawMatches)
                finalMatch = {
                    compID: compID,
                    matchNum: match.match_number,
                    red1: match.alliances.red.team_keys[0].substring(3),
                    red2: match.alliances.red.team_keys[1].substring(3),
                    red3: match.alliances.red.team_keys[2].substring(3),
                    blue1: match.alliances.blue.team_keys[0].substring(3),
                    blue2: match.alliances.blue.team_keys[1].substring(3),
                    blue3: match.alliances.blue.team_keys[2].substring(3),
                    redScore: match.alliances.red.score,
                    blueScore: match.alliances.blue.score,
                    matchTime: match.predicted_time
                }   
                MatchModel.createMatch(finalMatch);
            }
        }

        return JSON.stringify(teamList);

    },

    FetchBlueTeams: async (teamNums) => 
    {
     
        for(var i = 0; i < teamNums.length; i++) {
            teamNum = teamNums[i]

            // Gets Team By TeamNum
            const team = await MakeBlueApiRequest("/team/frc" + teamNum + "/simple")

            avatar = ""
            try{
                rawAvatar = await MakeFirstApiRequest("/2024/avatars?teamNumber=" + team.team_number);
                //console.log(rawAvatar.teams[0].encodedAvatar)
                avatar = rawAvatar.teams[0].encodedAvatar
            }
            catch{
                console.log("Failed to get " + team.team_number + "'s Avatar")
            }
            finalTeam = {
                teamNum: team.team_number,
                name: team.nickname,
                avatar: avatar,
                organization: team.name,
                location: team.city + ", " + team.state_prov
            };

            TeamModel.createTeam(team.team_number, finalTeam);

        }

    }
}