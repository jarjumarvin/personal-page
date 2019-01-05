export default [
  {
    id: 1,
    query: 'Marvin.contactInformation',
    answer:
      '[ \'<a href="mailto:marvin.jarju@gmail.com">marvin.jarju@gmail.com</a>\', \'<a rel="noopener" href="https://github.com/jarjumarvin">github</a>\' ]',
  },
  {
    id: 2,
    query: 'Marvin.occupation',
    answer:
      `{<br />
        &emsp; current: 'undergraduate computer science at ETH Zürich', <br />
        &emsp; past: {<br />
        &emsp;&emsp; work: [ 'mobile developer', 'software engineer' ] <br />
        &emsp;&emsp; education: [ 'federal diploma in software engineering' ] <br />
        &emsp; } <br />
        }`,
  },
  {
    id: 3,
    query: 'Marvin.interests',
    answer: '[ \'korean\', \'gaming\', \'science\' ]',
  },
];
