import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<tbody>
							<tr>
								<td>MASTER’S IN COMPUTER APPLICATION</td>
								<td>June 2018</td>
								<td>
									<Link to='/' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Bachelor of Arts</td>
								<td>june 2015</td>
								<td>
									<Link to='/' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
