const keys = require('../../config/keys');
module.exports = survey => {
	return `
	<html>
		<body>
			<div style="text-align: center">
					<h3>Please Send us your FeedBack</h3>
					<p>Answer the following questions</p>
					<p>${survey.body}</p>
					<a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
					<a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
			</div>
		</body>
	</html>
	`;
};
