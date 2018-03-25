import styled, { injectGlobal } from 'styled-components';

import colors from './colors';


export default function () {
	return (
		<Container>
			<Content>
				<Title children="I am Lawrence." />
				<SubTitle children="Software + Engineering." />

				<Link href="https://github.com/lwakefield" children="GitHub" />,&nbsp;
				<Link href="https://www.linkedin.com/in/lawrencewak/" children="Linkedin" />,&nbsp;
				<Link href="https://twitter.com/lawrenceewak" children="Twitter" />,&nbsp;
				<Link href="mailto:lawrence@iamlawrence.me" children="Email" />

			</Content>
		</Container>
	);
}

injectGlobal`
  body, html {
	font-family: monospace;
	margin: 0;
	padding: 0;
	background: ${ colors.background };
	color: ${ colors.foreground };

	width: 100%;
	height: 100%;
  }
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Content = styled.div`
	width: 100%;
	max-width: 32rem;
	padding: 1rem;
`;

const Title = styled.h1`
	font-size: 2rem;
	margin: 0;
	font-weight: normal;
	line-height: 1.75;
`;

const SubTitle = styled.h2`
	font-size: 2rem;
	margin: 0;
	font-weight: normal;
	line-height: 1.75;
`;

const Link = styled.a`
	color: ${ colors.foreground };
	font-size: 2rem;
	line-height: 1.75;
`;

const ZEN = `
The Zen of Python, by Tim Peters
================================
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
`;
console.log(ZEN);
