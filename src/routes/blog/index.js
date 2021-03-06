import { h } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Markdown from 'markdown-to-jsx';
import style from './style';

const blogs = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
		<article class={`${style.blogcontainer}`}>
			{getBlogBody(data, isLoading)}
		</article>
	);
};

function getBlogBody(data, isLoading) {
	if (isLoading) {
		return (
			<div class={style.loadingPlaceholder}>
				<h2 class={`${style.blogtitle} loading`} >&nbsp;</h2>
				<caption class={`${style.blogsubtitle} loading`}>&nbsp;</caption>
				<div class={style.blogbody}>
					<div class={`${style.loadingBody} loading`} />
					<div class={`${style.loadingBody} loading`} />
					<div class={`${style.loadingBody} loading`} />
				</div>
			</div>
		);
	}

	if (data && data.data) {
		const { details, content } = data.data;
		return (
			<div>
				<h2>{details.title}</h2>
				{ details.subtitle && <p class={style.blogsubtitle}>{details.subtitle}</p> }
				{ details.cover && <div class={style.blogcover} style={`background-image:url(${details.cover})`} /> }
				<div class={style.blogbody}>
					<Markdown>{ content.split(/---(.*(\r)?\n)*---/g)[3] /*hack for getting just content*/ }</Markdown>
				</div>
			</div>
		);
	}
}

export default blogs;
