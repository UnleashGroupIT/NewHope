import React from 'react'

import SponsorImgBox from '../Sponsor/SponsorImgBox/SponsorImgBox'

const HeadlineSponsorsBox = () => (
	<section className="HeadlineSponsorsBox">
		<div className="HeadlineSponsorsBox--wrp">
			<h2>Headline sponsors</h2>
			<div className="HeadlineSponsorsBox--Sponsors">
				<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" />
				<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-robotVera.svg" />
				<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-IBM.svg"/>
				<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-arctic.svg"/>
				<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-tandem.svg"/>
				<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg"/>
				<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-robotVera.svg" />
				<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-IBM.svg"/>
				<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-arctic.svg"/>
			</div>
		</div>
		<div className="linear-BG"></div>
	</section>
)

export default HeadlineSponsorsBox